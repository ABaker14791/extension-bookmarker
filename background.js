chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("autotrader.co.uk")) {
    chrome.tabs.executeScripts({
      file: "contentScript.js",
    });
  }
});
