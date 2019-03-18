$(function () {

    setTimeout(function () {
        $(".back").addClass("fall")
        setTimeout(function () {
            document.getElementById("first").className = "letter back fall transition-1 lastC";
            document.getElementById("second").className = "letter back fall transition-1 lastA";
            document.getElementById("third").className = "letter back fall transition-1 lastM";
            document.getElementById("fourth").className = "letter back fall transition-1 lastP";
            document.getElementById("fifth").className = "letter back fall transition-1 lastB";
            document.getElementById("last").className = "letter back fall transition-1 lastL";
            document.querySelector(".area").style.cursor = "default";
        }, 450);
    }, 500)

    $(".navBar a").on("click", function (e) {
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
    });

    const nameArray = [
        "Rock Paper Scissors",
        "Yahtzee",
        "Stardew Match Maker",
        "Burger App",
        "Bamazon"
    ]

    const informationArray = [
        "This is the classic Rock Paper Scissors Game. This is a multiplay game which utilizes the firebase authentication and database technologies. Simply create a user and join in on the 2 player fun.",
        "This is an ongoing personal project which has its beginnings back when I just started to learn web design. It started as a simple way to learn arrays and is turning into a fully finished game.",
        "This express app is based on the video game Stardew Valley. You take a survey to see which player from the game you should marry. Since there is online multiplayer, you will also be tested against people who have already taken it. Good Luck!",
        "This is an express app that utilizes both express-handlebars and MySql to store burgers into a menu. You can add burgers, devour them, put them back, or delete them. Sound tasty?",
        "Bamazon is a command line node.js app that simulates the interaction on online shopping. Customers can purchase items, Managers can purchase more inventory or add new products. Supervisors can view the financial standings of the departments and even create new departments."
    ];
    
    const webDestinations = [
        "https://mvcampbell3.github.io/RPS-Multiplayer/",
        "https://mvcampbell3.github.io/Word-Guess-Game/",
        "https://mvcampbell3.github.io/unit-4-game/"
    ]
    
    const gitDestinations = [
        "https://github.com/Mvcampbell3/RPS-Multiplayer",
        "https://github.com/Mvcampbell3/Yahtzee",
        "https://github.com/Mvcampbell3/Word-Guess-Game",
        "https://github.com/Mvcampbell3/unit-4-game",
        "https://github.com/Mvcampbell3/liri-node-app"
    ]
    
    $(".projectBox").on("click", function() {
        $(".projectBox").removeClass("active");
        $(this).addClass("active");
        let whichProject = parseInt($(this).attr("data-which"));
        let web = $(this).attr("data-web");
        $("#displayPic").attr("src", $(this).attr("data-carry"));
        $("#projectName").text(nameArray[whichProject]);
        $("#projectContent").text(informationArray[whichProject]);
    })

    const hiddenArray = [].slice.call(document.querySelectorAll(".hidden"));

    setTimeout(function () {
        let dist = 0;
        let timerFade = setInterval(function () {
            if (dist >= hiddenArray.length) {
                clearInterval(timerFade);
            } else {
                hiddenArray[dist].classList.add("fadeIn");
                dist++;
            }
        }, 1000)
    }, 1600)

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
