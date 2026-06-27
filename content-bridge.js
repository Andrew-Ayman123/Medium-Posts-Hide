// Content script running in ISOLATED world to bridge chrome.storage and page script
(function () {
  // Sync current filter status to MAIN world
  function syncEnabledStatus() {
    chrome.storage.local.get({ enabled: true }, (data) => {
      window.postMessage({ type: 'MEDIUM_FILTER_STATE', enabled: data.enabled }, '*');
    });
  }

  // Initial sync
  syncEnabledStatus();

  // Listen for storage changes (e.g. from popup toggle)
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.enabled) {
      window.postMessage({ type: 'MEDIUM_FILTER_STATE', enabled: changes.enabled.newValue }, '*');
    }
  });

  // Listen for messages from interceptor.js (MAIN world)
  window.addEventListener('message', (event) => {
    if (event.source !== window || !event.data) return;

    if (event.data.type === 'MEDIUM_FILTER_REQUEST_STATE') {
      syncEnabledStatus();
    } else if (event.data.type === 'MEDIUM_FILTER_REMOVED_COUNT') {
      const addedCount = event.data.count || 0;
      if (addedCount > 0) {
        chrome.storage.local.get({ mediumFeedFilterDeletedCount: 0 }, (data) => {
          const newCount = data.mediumFeedFilterDeletedCount + addedCount;
          chrome.storage.local.set({ mediumFeedFilterDeletedCount: newCount });
        });
      }
    }
  });
})();
