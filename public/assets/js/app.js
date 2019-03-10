$(function () {


    // $(".area").on("click", function () {
    $(".back").addClass("fall")
    console.log("ran");
    setTimeout(function () {
        document.getElementById("first").className = "letter back fall transition-1 lastC";
        document.getElementById("second").className = "letter back fall transition-1 lastA";
        document.getElementById("third").className = "letter back fall transition-1 lastM";
        document.getElementById("fourth").className = "letter back fall transition-1 lastP";
        document.getElementById("fifth").className = "letter back fall transition-1 lastB";
        document.getElementById("last").className = "letter back fall transition-1 lastL";
    }, 450);
    // })

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