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

// this is how we are going to animate that 'spinning wheel' effect

const secondPage = document.getElementById("secondPage");
const content = document.getElementById("content")
const allMovers = [secondPage, leftMover, rightMover];

setTimeout(function() {
  secondPage.animate([
    { transform: 'translate(0px, 0px) rotateZ(0deg)' },
    { transform: 'translate(300px, -1000px) rotateZ(60deg)' }
  ],
    {
      duration: 1250,
      fill: "forwards",
      easing: "ease-in-out"
    })
}, 3000)

setTimeout(function(){
    secondPage.animate([
      {transform: 'translate(300px, 1000px) rotateZ(-60deg)'},
      {transform: 'translate(0px, 0px) rotateZ(0deg)'}
    ], {
      duration: 1250,
      fill: "forwards",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1.175)"
    })
}, 6000)