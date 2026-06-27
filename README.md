<div align="center">

  <h1>Medium Recommended Member Posts Filter</h1>
  
  

  <img src="https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Chrome Extension">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL">
  <img src="https://img.shields.io/badge/Medium-121212?style=for-the-badge&logo=medium&logoColor=white" alt="Medium">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Manifest%20V3-009688?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Manifest V3">


  <h3>A lightweight, high-performance Chrome Extension (Manifest V3) that automatically intercepts and filters Medium's homepage and feed GraphQL responses to hide locked member-only posts while preserving public, accessible stories.
</h3>

  <img src="https://github.com/user-attachments/assets/ab22758c-e9de-4bb1-bbfc-07a9bd771e96" alt="logo" height="auto" />


</div>

---

## 🌟 Key Features

- 🚫 **Hide Paywalled Stories**: Automatically filters out member-only locked posts (`visibility: "LOCKED"` / `isLocked: true`) from your Medium feed.
- ⚡ **Expanded Feed Batches**: Intercepts `WebInlineRecommendedFeedQuery` outgoing requests to expand the request page limit from 5 to 25 items, minimizing repetitive loading spinners.
- 📐 **Proportional Pagination Scaling**: Automatically calculates and scales the pagination `to` offset cursors (`scaleFactor = 5x`) to ensure smooth, continuous infinite scrolling.
- 🔒 **Targeted GraphQL Interception**: Operates exclusively on recommended feed queries (`webRecommendedFeed`), leaving all other GraphQL requests (user profiles, search, bookmarks, claps) untouched.
- 🎛️ **Interactive Popup UI**: Toggle the filter ON/OFF at any time and view live statistics on how many locked posts have been filtered.
- 🛡️ **100% Private & Secure**: Operates entirely within your local browser memory. No tracking, analytics, or external requests.

---

## 🛠️ Extension Architecture

This extension utilizes Chrome's dual-world content script execution model (`MAIN` world and `ISOLATED` world) to provide seamless network interception:

```
┌──────────────────────────────────────────────────────────────────────────┐
│                             MEDIUM.COM PAGE                              │
│                                                                          │
│   ┌──────────────────────────────────────────────────────────────────┐   │
│   │                     interceptor.js (MAIN World)                  │   │
│   │  - Monkey-patches window.fetch and XMLHttpRequest                │   │
│   │  - Modifies outgoing GraphQL requests (limit: 25, scales 'to')   │   │
│   │  - Strips locked posts from webRecommendedFeed responses        │   │
│   └────────────────────────────────┬─────────────────────────────────┘   │
│                                    │ window.postMessage                  │
│   ┌────────────────────────────────▼─────────────────────────────────┐   │
│   │                   content-bridge.js (ISOLATED World)             │   │
│   │  - Bridges communication between web page and Extension Storage │   │
│   └────────────────────────────────┬─────────────────────────────────┘   │
└────────────────────────────────────┼─────────────────────────────────────┘
                                     │ chrome.storage.local
                                ┌────▼──────────────┐
                                │ background.js     │
                                │ Service Worker    │
                                └───────────────────┘
```

### File Breakdown
- **`manifest.json`**: Manifest V3 declaration specifying host permissions (`*://*.medium.com/*`) and content script worlds.
- **`interceptor.js`**: Runs in the `MAIN` execution world at `document_start` to intercept `fetch` and `XMLHttpRequest` calls.
- **`content-bridge.js`**: Runs in the `ISOLATED` execution world to securely read and write `chrome.storage.local` settings.
- **`background.js`**: Service worker handling initial configuration and storage defaults.
- **`popup.html` / `popup.css` / `popup.js`**: Modern, responsive popup interface for toggling the extension and viewing stats.

---

## 🚀 Step-by-Step Installation Guide

Follow these steps to install the unpacked extension in Chrome, Edge, or Brave:

### Step 1: Download or Clone the Repository
Clone this repository or download the source code as a ZIP file and extract it to a folder on your computer:
```bash
git clone https://github.com/your-username/medium-posts-hide.git
```

### Step 2: Open Extensions Page
Open your browser and navigate to the extensions management page:
- **Google Chrome**: Navigate to `chrome://extensions`
- **Microsoft Edge**: Navigate to `edge://extensions`
- **Brave Browser**: Navigate to `brave://extensions`

### Step 3: Enable Developer Mode
In the top-right corner of the Extensions page, toggle the **Developer mode** switch to **ON**.

### Step 4: Load Unpacked Extension
1. Click the **Load unpacked** button in the top-left menu.
2. Browse to and select the folder containing the extension files (where `manifest.json` is located).

### Step 5: Pin & Enjoy
1. Click the puzzle icon (Extensions) in your browser toolbar and pin **Medium Recommended Member Posts Filter**.
2. Navigate to [Medium.com](https://medium.com).
3. Click the extension popup to verify the status is **ACTIVE (ON)** and enjoy a clean feed!

---

## ⚙️ How It Works (Technical Overview)

1. **Request Phase**: When Medium initiates a GraphQL request to `/_/graphql` for `WebInlineRecommendedFeedQuery`, `interceptor.js` inspects the request payload. It changes `variables.paging.limit` to `25` and scales `variables.paging.to` proportionally based on the batch multiplier.
2. **Response Phase**: When the GraphQL response returns, `interceptor.js` parses the JSON payload, checks `data.webRecommendedFeed.items`, and strips out items where `post.isLocked === true` or `post.visibility === "LOCKED"`.
3. **Preservation**: Stories with `visibility: "PUBLIC"` or `isLocked: false` are explicitly preserved.
4. **State Sync**: The count of removed posts is dispatched to `content-bridge.js`, updating `chrome.storage.local` and reflecting live in the popup window.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
