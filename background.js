// Service worker for Medium Feed Filter Chrome Extension
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['enabled', 'mediumFeedFilterDeletedCount'], (result) => {
    if (result.enabled === undefined) {
      chrome.storage.local.set({ enabled: true });
    }
    if (result.mediumFeedFilterDeletedCount === undefined) {
      chrome.storage.local.set({ mediumFeedFilterDeletedCount: 0 });
    }
  });
});
