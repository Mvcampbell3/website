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

const homeLink = document.getElementById("homeLink");
const portfolioLink = document.getElementById("portfolioLink");
const contactLink = document.getElementById("contactLink");

const homePage = document.getElementById("homePage");
const portfolioPage = document.getElementById("portfolioPage");
const contactPage = document.getElementById("contactPage");

let currentPage = contactLink;
let runningAnimation = false;

const linkBtns = [homeLink, portfolioLink, contactLink];
linkBtns.forEach(linkBtn => {

  linkBtn.addEventListener("click", function() {
    if (!runningAnimation) {
      runningAnimation = true;
      linkBtns.forEach(linkBtn => linkBtn.classList.remove("currentPage"));
      this.classList.add("currentPage");
      if (currentPage === this) {
        console.log("same page");
        runningAnimation = false;
        return;
      } else {
        console.log("different page")
        transitionPages(document.getElementById(currentPage.dataset.which), document.getElementById(this.dataset.which));
        currentPage = this;
      }
    }
  })
})


function endFirstAnimate(elem) {
  console.log("first animation is finished")
  elem.style.display = "none";
}

function endSecondAnimate(elem) {
  console.log("second animation is finished")
  runningAnimation = false;
}

function transitionPages(currentPage, nextPage) {
  const firstAnimation = currentPage.animate([
    { transform: 'translate(0px, 0px) rotateZ(0deg)' },
    { transform: 'translate(300px, -1000px) rotateZ(60deg)' }
  ],
    {
      duration: 800,
      fill: "forwards",
      easing: "ease-in-out"
    });

  firstAnimation.onfinish = () => {
    endFirstAnimate(currentPage);
    console.log(nextPage.id);
    if (nextPage.id === "portfolioPage") {
      nextPage.style.display = "grid";
    } else {
      nextPage.style.display = "block";
    }
    const secondAnimation = nextPage.animate([
      { transform: 'translate(300px, 1000px) rotateZ(-60deg)' },
      { transform: 'translate(0px, 0px) rotateZ(0deg)' }
    ], {
        duration: 800,
        fill: "forwards",
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1.175)"
      });

    secondAnimation.onfinish = endSecondAnimate(nextPage)
  };
}

function testAnimation() {
  setTimeout(function() {
    transitionPages(firstPage, secondPage)
  }, 2000)
}

const contactBox = document.getElementById("contactBox")
const leaveBtn = document.getElementById("leaveBtn");
const leaveBtn2 = document.getElementById("leaveBtn2");

function flipContact() {
  contactBox.animate([
    { transform: 'rotateY(0deg)' },
    { transform: 'rotateY(180deg)' }
  ], {
      duration: 500,
      fill: "forwards"
    })
}

function flipContact2() {
  console.log("flip back")
  contactBox.animate([
    { transform: 'rotateY(180deg)' },
    { transform: 'rotateY(0deg)' }
  ], {
      duration: 500,
      fill: "forwards"
    })
}

leaveBtn.addEventListener("click", flipContact)
leaveBtn2.addEventListener("click", flipContact2)

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("subContact")

function getMessage() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  console.log(name, email, message);

  if (email && name && message) {
    let sendObj = {
      name: name,
      email: email,
      text: message
    }
    console.log(sendObj);
    $.ajax("/api/message", {
      type: "POST",
      data: sendObj
    }).then(result => {
      console.log(result);
      const clearInputs = [nameInput, emailInput, messageInput];
      clearInputs.forEach(one => one.value = "");
      flipContact2();
      alert("Message received!, Thank you!");
    })
  } else {
    alert("Please fill in all inputs, Thank you!")
  }
}

sendBtn.addEventListener("click", getMessage);