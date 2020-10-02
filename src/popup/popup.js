console.log("hello this is a popup");

function setup() {
  const boxes = document.getElementsByClassName("box");
  const colors = ["#27ae60", "#9b59b6", "#e74c3c", "#f1c40f", "#3498db"];
  [].forEach.call(boxes, (box) => {
    box.style.transition = "0.5s all";
  });

  animateBoxes({ boxes, colors });

  const bigBtn = document.getElementById("big-btn");
  bigBtn.addEventListener("click", () => {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      (tabs) => {
        const msg = { text: "popup_message" };
        chrome.tabs.sendMessage(tabs[0].id, msg);
      }
    );
  });
}

function animateBoxes({ boxes, colors }) {
  setInterval(() => {
    [].forEach.call(boxes, (box) => {
      const colorIdx = Math.floor(Math.random() * 5);
      box.style.background = colors[colorIdx];
    });
  }, 2000);
}

setup();
