// Arrays of digit-bars for each time digit
const digit1Bars = [].slice.call(document.querySelectorAll(".digit_1"));
const digit2Bars = [].slice.call(document.querySelectorAll(".digit_2"));
const digit3Bars = [].slice.call(document.querySelectorAll(".digit_3"));
const digit4Bars = [].slice.call(document.querySelectorAll(".digit_4"));
const digit5Bars = [].slice.call(document.querySelectorAll(".digit_5"));
const digit6Bars = [].slice.call(document.querySelectorAll(".digit_6"));

// Get time from new Date function, manipulate it into other functions
function getTime() {
  const newTime = new Date();
  let hours = newTime.getHours();
  let minutes = newTime.getMinutes();
  let seconds = newTime.getSeconds();

  const hoursDisp = hours % 12;

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // regularDisplay(hours, hoursDisp, minutes, seconds)
  setOldClock(hoursDisp, minutes, seconds)
}

// Update regular time display on screen
function regularDisplay(hours, hoursDisp, minutes, seconds) {

  const amPM = hours > 12 ? "PM" : "AM";

  const hourPlace = document.getElementById("hour");
  const minPlace = document.getElementById("min");
  const secPlace = document.getElementById("sec");
  const apPlace = document.getElementById("amPM");

  hourPlace.textContent = hoursDisp;
  minPlace.textContent = minutes;
  secPlace.textContent = seconds;
  apPlace.textContent = amPM;
}

// Update old clock display
function setOldClock(hoursDisp, minutes, seconds) {
  const minArray = minutes.toString().split("")
  digitDisplay(minArray[0], digit3Bars);
  digitDisplay(minArray[1], digit4Bars)

  const secArray = seconds.toString().split("")
  digitDisplay(secArray[0], digit5Bars);
  digitDisplay(secArray[1], digit6Bars)

  let hoursStr;

  if (hoursDisp < 10) {
    hoursStr = `0${hoursDisp}`;
    digit1Bars.forEach(one => one.style.opacity = "0");
  } else {
    hoursStr = hoursDisp;
    digit1Bars.forEach(one => one.style.opacity = "1");
  }

  hoursArr = hoursStr.toString().split("");
  digitDisplay(hoursArr[0], digit1Bars)
  digitDisplay(hoursArr[1], digit2Bars)
}

// Set the circle sizes, no longer in use but might come back to later
function setCircles(hour, min, sec) {
  console.log(hour, min, sec)
  const hourMax = 24;
  const minMax = 60;
  const secMax = 60;
  const hourCir = document.getElementById("hourCir");
  const minCir = document.getElementById("minCir");
  const secCir = document.getElementById("secCir");

  const hourSize = ((hour / hourMax) * 100) + "px";
  const minSize = ((min / minMax) * 100) + "px";
  const secSize = ((sec / secMax) * 100) + "px";

  hourCir.style.height = hourSize;
  hourCir.style.width = hourSize;
  minCir.style.height = minSize;
  minCir.style.width = minSize;
  secCir.style.height = secSize;
  secCir.style.width = secSize;
}

// Decide which bars to display based on number and digit array input
function digitDisplay(number, digit) {
  number = parseInt(number);
  digit.forEach(one => one.style.display = "block")
  switch (number) {
    case 0:
      digit[2].style.display = "none";
      break;
    case 1:
      digit[0].style.display = "none";
      digit[2].style.display = "none";
      digit[3].style.display = "none";
      digit[5].style.display = "none";
      digit[6].style.display = "none";
      break;
    case 2:
      digit[3].style.display = "none";
      digit[4].style.display = "none";
      break;
    case 3:
      digit[3].style.display = "none";
      digit[6].style.display = "none";
      break;
    case 4:
      digit[0].style.display = "none";
      digit[5].style.display = "none";
      digit[6].style.display = "none";
      break;
    case 5:
      digit[1].style.display = "none";
      digit[6].style.display = "none";
      break;
    case 6:
      digit[1].style.display = "none";
      break;
    case 7:
      digit[2].style.display = "none";
      digit[3].style.display = "none";
      digit[5].style.display = "none";
      digit[6].style.display = "none";
      break;
    case 8:
      break;
    case 9:
      digit[6].style.display = "none";
      break;
    default:
      console.log("digitDisplay switch not working")
  }
};

// Start with time loaded
getTime()
// Run everything 1/s
const timer = setInterval(getTime, 1000)