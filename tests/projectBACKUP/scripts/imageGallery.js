// import {language} from "./langSetup";

var currentImage = document.getElementsByClassName('current-image')[0];

function moveToSelected(elementSelected) {


        if(elementSelected === "next") {
            var current = $(".current-image").next("DIV");
        } else if(elementSelected === "prev") {
            var current = $(".current-image").prev("DIV");
        }
        
            var next = $(current).next("DIV");

            var prev = $(current).prev("DIV");

            $(current).removeClass().addClass("carousel-image-container current-image");


            $(prev).removeClass().addClass("carousel-image-container prev-image");
            $(next).removeClass().addClass("carousel-image-container next-image");

            $(next).nextAll("DIV").removeClass().addClass('carousel-image-container next-hidden-image');
            $(prev).prevAll("DIV").removeClass().addClass('carousel-image-container prev-hidden-image');


}


// resize image-carousel to fit img and move bottom element down to fit gallery.     + imgOfCarousel.clientHeight

var imgOfCarousel = document.getElementsByClassName("current-image")[0];
var carousel = document.querySelector(".images-carousel");

carousel.style.height = imgOfCarousel.clientHeight.toString() + "px";

// window.addEventListener("resize", calculateCarouselImageContainerHeight);

new ResizeSensor(jQuery('body'), calculateCarouselImageContainerHeight);

function calculateCarouselImageContainerHeight() {
    carousel.style.height = imgOfCarousel.clientHeight.toString() + "px";
}

// $(window).bind('resize', function() {
//     carousel.style.height = imgOfCarousel.clientHeight.toString() + "px";
// });