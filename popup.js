document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('enabledToggle');
  const statusBanner = document.getElementById('statusBanner');
  const statusText = document.getElementById('statusText');
  const deletedCountLabel = document.getElementById('deletedCountLabel');

  function setUIState(enabled) {
    toggle.checked = enabled;
    statusText.textContent = enabled ? 'ACTIVE (ON)' : 'DISABLED (OFF)';
    if (statusBanner) {
      statusBanner.classList.toggle('active', enabled);
      statusBanner.classList.toggle('disabled', !enabled);
    }
  }

  function updateDeletedCount() {
    chrome.storage.local.get({ mediumFeedFilterDeletedCount: 0 }, (data) => {
      if (deletedCountLabel) {
        deletedCountLabel.textContent = data.mediumFeedFilterDeletedCount.toLocaleString();
      }
    });
  }

  // Initial fetch
  chrome.storage.local.get({ enabled: true }, (data) => {
    setUIState(data.enabled);
  });

  updateDeletedCount();

  // Handle toggle user change
  toggle.addEventListener('change', () => {
    const isEnabled = toggle.checked;
    chrome.storage.local.set({ enabled: isEnabled }, () => {
      setUIState(isEnabled);
    });
  });

  // Listen for background updates
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local') {
      if (changes.enabled !== undefined) {
        setUIState(changes.enabled.newValue);
      }
      if (changes.mediumFeedFilterDeletedCount !== undefined) {
        updateDeletedCount();
      }
    }
  });
});