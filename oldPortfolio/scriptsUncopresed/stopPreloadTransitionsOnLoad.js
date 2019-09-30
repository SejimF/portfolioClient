
  var body = document.getElementsByClassName("preload");
  body.item(0).classList.remove("preload");

  if(document.getElementsByClassName("loading")[0]) {
    document.getElementsByClassName("loading")[0].style.display = "none";
    document.getElementsByTagName("nav")[0].style.display = "flex";

    document.getElementsByTagName("main")[0].style.display = "flex";
    document.getElementsByTagName("footer")[0].style.display = "flex";
  }



