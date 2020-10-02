console.log("hello this is a popup");

function setup() {
  const boxes = document.getElementsByClassName("box");
  const colors = ["#27ae60", "#9b59b6", "#e74c3c", "#f1c40f", "#3498db"];
  [].forEach.call(boxes, (box) => {
    box.style.transition = "0.5s all";
  });

  animateBoxes({ boxes, colors });
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
