
function moveToSelected(elementSelected) {
    var current;

        if(elementSelected === "next") {
            current = $(".current-image").next("DIV");
        } else if(elementSelected === "prev") {
            current = $(".current-image").prev("DIV");
        }
        
            var next = $(current).next("DIV");

            var prev = $(current).prev("DIV");

            $(current).removeClass().addClass("carousel-image-container current-image");


            $(prev).removeClass().addClass("carousel-image-container prev-image");
            $(next).removeClass().addClass("carousel-image-container next-image");

            $(next).nextAll("DIV").removeClass().addClass('carousel-image-container next-hidden-image');
            $(prev).prevAll("DIV").removeClass().addClass('carousel-image-container prev-hidden-image');

            if($(current).index() < 0) {
                return;
            }

            if($(current).index() === $(".carousel-image-container").length - 1) {
                $(".right-arrow").addClass("hideArrow");
            } else if($(current).index() === 0) {
                $(".left-arrow").addClass("hideArrow");
            } else {
                $(".left-arrow").removeClass("hideArrow");
                $(".right-arrow").removeClass("hideArrow");
            }

}

$(".arrows").each(function(arrow) {
   arrow = new Hammer(this, {
        recognizers: [
            [Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }],
        ]
    });

    arrow.on("swiperight", function(ev) {
        moveToSelected("prev")
    });

    arrow.on("swipeleft", function(ev) {
        moveToSelected("next")
});

});

// resize image-carousel to fit img and move bottom element down to fit gallery.     + imgOfCarousel.clientHeight



new ResizeSensor(jQuery('body'), calculateCarouselImageContainerHeight);

function calculateCarouselImageContainerHeight() {
    var imgOfCarousel = document.getElementsByClassName("current-image")[0];
var carousel = document.querySelector(".images-carousel");





carousel.style.height = imgOfCarousel.clientHeight.toString() + "px";

    carousel.style.height = imgOfCarousel.clientHeight.toString() + "px";
}