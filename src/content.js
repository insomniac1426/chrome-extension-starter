console.log("hello content!");
// Messaging API
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if (message.text === "hello") {
    // do task on messaging
    const paragraphs = document.getElementsByTagName('p');
    [].forEach.call(paragraphs, element => {
      element.style.color = '#f00'
    });
  }
}