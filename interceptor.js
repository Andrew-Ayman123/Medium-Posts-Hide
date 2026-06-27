// Interceptor script running in MAIN world to monkey-patch fetch and XMLHttpRequest
(function () {
  let filterEnabled = true;

  // Request initial filter state from content-bridge.js
  window.postMessage({ type: 'MEDIUM_FILTER_REQUEST_STATE' }, '*');

  // Listen for state updates from content-bridge.js
  window.addEventListener('message', (event) => {
    if (event.source !== window || !event.data) return;
    if (event.data.type === 'MEDIUM_FILTER_STATE') {
      filterEnabled = !!event.data.enabled;
    }
  });

  // Helper function to modify outgoing GraphQL request payloads to adjust limit to 25 and scale 'to' accordingly
  function modifyGraphQLRequestBody(bodyText) {
    if (!filterEnabled || !bodyText || typeof bodyText !== 'string') return bodyText;
    try {
      const json = JSON.parse(bodyText);
      let modified = false;

      function patchOperation(op) {
        if (!op) return;
        const isTargetQuery =
          op.operationName === 'WebInlineRecommendedFeedQuery' ||
          (typeof op.query === 'string' && op.query.includes('WebInlineRecommendedFeedQuery'));

        if (isTargetQuery && op.variables && op.variables.paging) {
          const paging = op.variables.paging;
          const origLimit = paging.limit || 5;
          const newLimit = 25;

          paging.limit = newLimit;
          modified = true;

          // Adjust 'to' field proportionally based on the updated page limit
          if (paging.to !== undefined && paging.to !== null) {
            const numericTo = parseInt(paging.to, 10);
            if (!isNaN(numericTo)) {
              const scaleFactor = newLimit / origLimit; // e.g. 25 / 5 = 5
              paging.to = String(Math.round(numericTo * scaleFactor));
            }
          }
        }
      }

      if (Array.isArray(json)) {
        for (const op of json) {
          patchOperation(op);
        }
      } else if (typeof json === 'object') {
        patchOperation(json);
      }

      if (modified) {
        return JSON.stringify(json);
      }
    } catch (e) {
      // Ignore non-JSON request bodies
    }
    return bodyText;
  }

  // Helper function to process and filter GraphQL response JSON specifically for WebInlineRecommendedFeedQuery
  function filterGraphQLData(jsonData) {
    let totalRemoved = 0;

    function processOperation(op) {
      if (!op || !op.data) return;

      // Target ONLY webRecommendedFeed (the exact root property of WebInlineRecommendedFeedQuery)
      const feed = op.data.webRecommendedFeed;
      if (feed && Array.isArray(feed.items)) {
        // Update all pagingInfo limit references to 25 in the response payload
        if (feed.pagingInfo) {
          if (feed.pagingInfo.limit !== undefined) {
            feed.pagingInfo.limit = 25;
          }
          if (feed.pagingInfo.next) {
            feed.pagingInfo.next.limit = 25;
            if (feed.pagingInfo.next.to !== undefined && feed.pagingInfo.next.to !== null) {
              feed.pagingInfo.next.to = String(feed.pagingInfo.next.to);
            }
          }
        }

        const origLen = feed.items.length;
        feed.items = feed.items.filter((item) => {
          if (!item) return true;
          const post = item.post || (item.__typename === 'Post' ? item : null);
          if (!post) return true; // Keep non-post items (e.g., promotional banners)

          const isExplicitlyPublic = post.visibility === 'PUBLIC' || post.isLocked === false;
          const isExplicitlyLocked = post.isLocked === true || post.visibility === 'LOCKED';

          // Always preserve PUBLIC stories
          if (isExplicitlyPublic) {
            return true;
          }

          // Remove locked member-only stories
          if (isExplicitlyLocked) {
            return false;
          }

          return true;
        });
        totalRemoved += (origLen - feed.items.length);
      }
    }

    if (Array.isArray(jsonData)) {
      for (const op of jsonData) {
        processOperation(op);
      }
    } else if (jsonData && jsonData.data) {
      processOperation(jsonData);
    }

    return totalRemoved;
  }

  function processResponseText(text) {
    if (!filterEnabled || !text) return text;
    try {
      const json = JSON.parse(text);
      const removedCount = filterGraphQLData(json);
      if (removedCount > 0) {
        window.postMessage({ type: 'MEDIUM_FILTER_REMOVED_COUNT', count: removedCount }, '*');
      }
      return JSON.stringify(json);
    } catch (e) {
      // Not JSON or parse error, return original text
    }
    return text;
  }

  // Monkey-patch window.fetch
  const originalFetch = window.fetch;
  window.fetch = async function (...args) {
    try {
      const url = typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url ? args[0].url : '');
      if (url && url.includes('/_/graphql') && filterEnabled) {
        // Intercept outgoing request payload and update limit and to fields
        if (args[1] && args[1].body) {
          args[1].body = modifyGraphQLRequestBody(args[1].body);
        }
      }
    } catch (err) {
      console.error('[Medium Feed Filter] Error modifying fetch request payload:', err);
    }

    const response = await originalFetch.apply(this, args);

    try {
      const url = typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url ? args[0].url : '');
      if (url && url.includes('/_/graphql') && filterEnabled) {
        const clone = response.clone();
        const originalText = await clone.text();
        const modifiedText = processResponseText(originalText);
        if (modifiedText !== originalText) {
          return new Response(modifiedText, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
          });
        }
      }
    } catch (err) {
      console.error('[Medium Feed Filter] Error processing fetch response:', err);
    }
    return response;
  };

  // Monkey-patch XMLHttpRequest
  const originalXHR = window.XMLHttpRequest;
  function PatchedXHR() {
    const xhr = new originalXHR();
    let isGraphQL = false;

    const originalOpen = xhr.open;
    xhr.open = function (method, url, ...rest) {
      if (typeof url === 'string' && url.includes('/_/graphql')) {
        isGraphQL = true;
      }
      return originalOpen.call(this, method, url, ...rest);
    };

    const originalSend = xhr.send;
    xhr.send = function (body) {
      if (isGraphQL && filterEnabled && body) {
        body = modifyGraphQLRequestBody(body);
      }
      return originalSend.call(this, body);
    };

    Object.defineProperty(xhr, 'responseText', {
      get: function () {
        const originalText = xhr.response;
        if (isGraphQL && filterEnabled && typeof originalText === 'string') {
          return processResponseText(originalText);
        }
        return originalText;
      },
      configurable: true
    });

    Object.defineProperty(xhr, 'response', {
      get: function () {
        const originalRes = xhr.responseText;
        return originalRes;
      },
      configurable: true
    });

    return xhr;
  }
  PatchedXHR.prototype = originalXHR.prototype;
  window.XMLHttpRequest = PatchedXHR;
})();
