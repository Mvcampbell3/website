const projectHolder = document.getElementById("projectHolder");
const leftMover = document.getElementById("leftMover");
const rightMover = document.getElementById("rightMover");

let pos = 0;
let running = false;

leftMover.addEventListener("click", moveRight);
rightMover.addEventListener("click", moveLeft);

function moveLeft() {
  if (!running) {
    console.log(pos)
    running = true;
    const leftAnimate = projectHolder.animate([
      { transform: `translateX(${pos * -350}px)` },
      { transform: `translateX(${(pos + 1) * -350}px)` }
    ], {
        duration: 333,
        fill: "forwards",
        easing: "ease-out"
      })

    leftAnimate.onfinish = function() {
      console.log("this is over")
      pos++;
      running = false;
    }
  }

}

function moveRight() {
  if (!running) {
    console.log(pos)
    running = true;
    const rightAnimate = projectHolder.animate([
      { transform: `translateX(${pos * -350}px)` },
      { transform: `translateX(${(pos - 1) * -350}px)` }
    ], {
        duration: 333,
        fill: "forwards",
        easing: "ease-out"
      })

    rightAnimate.onfinish = function() {
      console.log("this is over")
      pos--;
      running = false;
    }
  }

}