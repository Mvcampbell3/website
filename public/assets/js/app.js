let which = 0;

$(function () {

    setTimeout(function () {
        $(".back").addClass("fall")
        console.log("ran");
        setTimeout(function () {
            document.getElementById("first").className = "letter back fall transition-1 lastC";
            document.getElementById("second").className = "letter back fall transition-1 lastA";
            document.getElementById("third").className = "letter back fall transition-1 lastM";
            document.getElementById("fourth").className = "letter back fall transition-1 lastP";
            document.getElementById("fifth").className = "letter back fall transition-1 lastB";
            document.getElementById("last").className = "letter back fall transition-1 lastL";
            document.querySelector(".area").style.cursor = "default";
        }, 450);
    }, 1000)



    $(".about").on("click", function () {
        $(".bg").removeClass("rightBack");
        $(".bg").addClass("right");
        $(".aboutSection").addClass("left");
        $(".aboutSection").removeClass("leftBack");
        which = 1;
    })

    $(".home").on("click", function () {
        if (which === 1) {
            $(".bg").removeClass("right");
            $(".bg").addClass("rightBack");
            $(".aboutSection").addClass("leftBack");
            $(".aboutSection").removeClass("left");
            which = 0
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