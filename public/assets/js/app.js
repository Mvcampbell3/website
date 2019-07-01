$(function() {

  setTimeout(function() {
    $(".back").addClass("fall")
    setTimeout(function() {
      document.getElementById("first").className = "letter back fall transition-1 lastC";
      document.getElementById("second").className = "letter back fall transition-1 lastA";
      document.getElementById("third").className = "letter back fall transition-1 lastM";
      document.getElementById("fourth").className = "letter back fall transition-1 lastP";
      document.getElementById("fifth").className = "letter back fall transition-1 lastB";
      document.getElementById("last").className = "letter back fall transition-1 lastL";
      document.querySelector(".area").style.cursor = "default";
    }, 450);
  }, 500)

  $(".navBar a").on("click", function(e) {
    e.preventDefault();
    console.log(this.hash)
    if (this.hash !== "") {
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        500
      );
    }
    $(".navBar a").removeClass("there");
    $(this).addClass("there");
  });

  $(".projectBox").on("click", function() {
    $(".projectBox").removeClass("active");
    $(this).addClass("active");
    let whichProject = parseInt($(this).attr("data-which"));
    $("#displayPic").attr("src", $(this).attr("data-carry"));
    $("#projectName").text(nameArray[whichProject]);
    $("#projectContent").text(informationArray[whichProject]);
    setButtons($(this).attr("data-which"), $(this).attr("data-web"));
  })

  const hiddenArray = [].slice.call(document.querySelectorAll(".hidden"));

  setTimeout(function() {
    let dist = 0;
    let timerFade = setInterval(function() {
      if (dist >= hiddenArray.length) {
        clearInterval(timerFade);
      } else {
        hiddenArray[dist].classList.add("fadeIn");
        dist++;
      }
    }, 1000)
  }, 1600);

  $(".subContact").on("click touchstart", function(e) {
    if (e.type === "touchstart") {
      $(this).off("click");
    }
    let name = $("#nameInput").val().trim();
    let email = $("#emailInput").val().trim();
    let message = $("#message").val().trim();


    if (email && name && message) {
      let sendObj = {
        name: name,
        email: email,
        text: message
      }
      $.ajax("/api/message", {
        type: "POST",
        data: sendObj
      }).then(result => {
        console.log(result);
        $("#nameInput").val("");
        $("#emailInput").val("");
        $("#message").val("");
        alert("Message recieved. Thank you " + result.name + "!");
      })
    } else {
      alert("Please enter information in all of the fields")
    }
  })

});

function seperately(name) {
  var letters = [].slice.call(document.querySelectorAll("." + name))
  var timer = setInterval(frame, 100);
  var pos = 0;
  function frame() {
    if (pos >= 7) {
      clearInterval(timer);
      console.log("timer over");
    } else {
      letters[pos].classList.add("fall");
      pos++;
    }
  }
}

const nameArray = [
  "Rover Reddit",
  "Yahtzee",
  "Stardew Match Maker",
  "Space Scrape",
  "Skyrim Click Game"
]

const informationArray = [
  "My Final Project for the Bootcamp, we made an application which leveraged the Mars Rover Photos API, which has access to over 500,000 pictures, into a interactive social media hub. Utilizes the MERN stack.",
  "This is a React application which allows the user to play Yahztee. This site also tracks the scores of logged in users. Have fun rolling the dice! Uses MERN stack.",
  "This express app is based on the video game Stardew Valley. You take a survey to see which player from the game you should marry. Since there is online multiplayer, you will also be tested against people who have already taken it. Good Luck!",
  "This is an express app that scrapes space stories from the website space.com/news. Users can also comment on the articles. Uses Axios and Cheerio, Express, Node.js, and Handlebars.",
  "Skyrim Click Game is a React app that tests the players memory. Scores are based on number of correct guesses made in a row. A player wins the game by correctly clicking on all of the characters with clicking a duplicate."
];

const webDestinations = [
  "https://rover-reddit.herokuapp.com/",
  "https://yahtzee-react.herokuapp.com/",
  "https://secret-temple-27121.herokuapp.com/",
  "https://frozen-ravine-29791.herokuapp.com/",
  "https://skyrim-clickgame.herokuapp.com/"
]

const gitDestinations = [
  "https://github.com/DavidWeid/Space-Pair-Project",
  "https://github.com/Mvcampbell3/YahtzeeReact",
  "https://github.com/Mvcampbell3/friend_finder",
  "https://github.com/Mvcampbell3/scraper3000",
  "https://github.com/Mvcampbell3/clickgame"
]

function setButtons(which, web) {
  switch (web) {
    case "true":
      $("#web").css({ display: "inline-block" });
      break;
    case "false":
      $("#web").css({ display: "none" });
      break;
    default:
      console.log("web switch not working");
  }

  switch (which) {
    case "0":
      $("#web").attr("href", webDestinations[0]);
      $("#git").attr("href", gitDestinations[0]);
      break;
    case "1":
      $("#web").attr("href", webDestinations[1]);
      $("#git").attr("href", gitDestinations[1]);
      break;
    case "2":
      $("#web").attr("href", webDestinations[2]);
      $("#git").attr("href", gitDestinations[2]);
      break;
    case "3":
      $("#web").attr("href", webDestinations[3]);
      $("#git").attr("href", gitDestinations[3]);
      break;
    case "4":
      $("#web").attr("href", webDestinations[4]);
      $("#git").attr("href", gitDestinations[4]);
  }
}