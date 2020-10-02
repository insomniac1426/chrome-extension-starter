console.log("hello background!");

// Chrome API
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  const msg = {
    text: "hello",
  }

  chrome.tabs.sendMessage(tab.id, msg);
}