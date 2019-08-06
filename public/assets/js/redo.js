const topLink = document.getElementById("topLink")
const middleLink = document.getElementById("middleLink")
const bottomLink = document.getElementById("bottomLink")

middleLink.addEventListener("mouseover", function(){
  topLink.style.borderBottom = "0px black solid";
  bottomLink.style.borderTop = "0px black solid";
})

middleLink.addEventListener("mouseout", function(){
  topLink.style.borderBottom = "2.5px black solid";
  bottomLink.style.borderTop = "2.5px black solid";
})