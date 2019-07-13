var main = document.getElementsByTagName("main")[0];
var headerHeight = document.getElementsByTagName("nav")[0];

var paddingSize = headerHeight.clientHeight + 20;
main.style.paddingTop = paddingSize + "px";

function loaded() {
    
    $("nav")[0].style.display = "flex";
    $("main")[0].style.display = "flex";
    $("footer")[0].style.display = "flex";
    $(".loading")[0].style.display = "none";

    var paddingSize = headerHeight.clientHeight + 20;
    main.style.paddingTop = paddingSize + "px";

    // main.style.display = 'flex';
    calculateCarouselImageContainerHeight();
    
}   