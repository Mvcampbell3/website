$(function () {

    
    $(".area").on("click", function() {
        $(".backBox").addClass("shadowFlip")
        setTimeout(function(){
            // $(".back").addClass("fall")
            seperately("back");
            console.log("ran");
        }, 4250)
        setTimeout(function(){
            seperately("front");
        }, 4550);
    })

});

function seperately(name) {
    var letters = [].slice.call(document.querySelectorAll("."+name))
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