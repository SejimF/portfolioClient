
/*
Elements of the navigation
*/

var drop_shadow = $(".drop_shadow");
var menu_button = $(".current_page");

var ended = true;

function changePage() {
    if(ended) {

        changeDropShadow(drop_shadow.addClass());
        
    }
}

// change page

// Droping shadow slowly
function changeDropShadow (element) {
    if(!element[0].style.display && !$(".nav_list_mobile")[0].classList.contains("opened") || element[0].style.display === "none" && !$(".nav_list_mobile")[0].classList.contains("opened")) {
        ended = false;
        element[0].style.display = "block";
        setTimeout(function () { element.addClass("active"); }, 1);
        $(".menu_bar").addClass("opened");
        ended = true;
    } else if($(".nav_list_mobile")[0].classList.contains("opened")) {
        ended = false;
        element.removeClass("active");
        $(".menu_bar").removeClass("opened");
        setTimeout(function () { element[0].style.display = "none"; ended = true;}, 500);
        
    }

    $(".nav_list_mobile").toggleClass("opened");
}


function redirectToPage(id) {
        location.href = "./"+ id + ".html";
}

