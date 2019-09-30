var first = document.querySelector("#first");
var second = document.querySelector("#second");
var third = document.querySelector("#third");


function setProperty(duration, spanN) {
  spanN.style.setProperty("--animation-time", duration +"s");
  spanN.setAttribute("animation-duration", duration +"s");
  
}

function changeAnimationTime() {
  // console.log("running");
  
  var animationDuration = Math.random();
  setProperty(animationDuration, first);
  
  animationDuration = Math.random();
  setProperty(animationDuration, second);
  
  animationDuration = Math.random();
  setProperty(animationDuration, third);
}

setInterval(changeAnimationTime, 1000);