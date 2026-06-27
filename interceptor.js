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

  // Helper function to process and filter GraphQL response JSON specifically for WebInlineRecommendedFeedQuery
  function filterGraphQLData(jsonData) {
    let totalRemoved = 0;

    function processOperation(op) {
      if (!op || !op.data) return;

      // Target ONLY webRecommendedFeed (the exact root property of WebInlineRecommendedFeedQuery)
      const feed = op.data.webRecommendedFeed;
      if (feed && Array.isArray(feed.items)) {
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
        return JSON.stringify(json);
      }
    } catch (e) {
      // Not JSON or parse error, return original text
    }
    return text;
  }

  // Monkey-patch window.fetch
  const originalFetch = window.fetch;
  window.fetch = async function (...args) {
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
