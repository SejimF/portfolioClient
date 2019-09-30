var main = document.getElementsByClassName("top_section")[0];
var headerHeight = document.getElementsByTagName("nav")[0];

var paddingSize = headerHeight.clientHeight + 20;
main.style.paddingTop = paddingSize + "px";

loaded();

function loaded() {
    var paddingSize = headerHeight.clientHeight + 20;
    main.style.paddingTop = paddingSize + "px";

    // document.getElementsByClassName("loading")[0].style.display = "none";

    // document.getElementsByTagName("nav")[0].style.display = "flex";

    // document.getElementsByTagName("main")[0].style.display = "flex";
    // document.getElementsByTagName("footer")[0].style.display = "flex";

    calculateCarouselImageContainerHeight();
    
}