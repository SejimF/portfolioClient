// var cunterPage = $(".currentPage");


function moveToSelected(elementSelected, swipe) {

    var pageExiting = $(".currentPage");

    if (pageExiting[0].id === elementSelected.id) {
        return;
    }

    cunterPage = pageExiting;



    if (elementSelected === "next") {
        var current = $(".currentPage").next(".page");
    } else if (elementSelected === "prev") {
        var current = $(".currentPage").prev(".page");
    } else {
        var current = elementSelected;
    }

    
    

    if (current.index && current.index() < 0) {
        return;
    }

    animatePageExit(pageExiting);


    setTimeout(function () {

        changePageTransition(current);

    }, 1000);


    if (!swipe) {

        changePage();
    }

}


function changePageTransition(current) {

    var next = $(current).next(".page");

    var prev = $(current).prev(".page");

    $(current).removeClass().addClass("page currentPage");


    $(prev).removeClass().addClass("page previusPage");
    $(next).removeClass().addClass("page nextPage");

    $(next).nextAll(".page").removeClass().addClass('page nextPageHidden');
    $(prev).prevAll(".page").removeClass().addClass('page previusPageHidden');

    setTimeout(function () {
        animatePageEnter(current);
    }, 1000);

    
    


    if (current[0]) {
        
        $(".current_page").css( "filter", "blur(5px)");
        $(".menu_button").css("background-color", $('.' + current[0].id).css("background-color"));
        $(".menu_button").css("background-color", $('.' + current[0].id).css("background-color"));
        $("main").css("border-color", $('.' + current[0].id).css("background-color"));
        $(".current_page").text("")
        $(".current_page").text($("." + current[0].id)[0].textContent.trim())

        setTimeout(function () {
            $(".current_page").css( "filter", "blur(0px)");
        }, 300)

        if (current[0].id === "aboutMe") {
            currentPageTimeline = indexPageTimeLine;
        } else if (current[0].id === "mySkills") {
            currentPageTimeline = skillsTimeline;
        } if (current[0].id === "myProjects") {
            currentPageTimeline = projectTimeLine;
        } if (current[0].id === "contactMe") {
            currentPageTimeline = contactMeTimeline;
        }

    } else {
       
        $(".current_page").css( "filter", "blur(5px)");
        $(".menu_button").css("background-color", $('.' + current.id).css("background-color"));
        $("main").css("border-color", $('.' + current.id).css("background-color"));
        $(".current_page").text($("." + current.id)[0].textContent.trim());

        setTimeout(function () {
            $(".current_page").css( "filter", "blur(0px)");
        }, 300)

        if (current.id === "aboutMe") {
            currentPageTimeline = indexPageTimeLine;
        } else if (current.id === "mySkills") {
            currentPageTimeline = skillsTimeline;
        } if (current.id === "myProjects") {
            currentPageTimeline = projectTimeLine;
        } if (current.id === "contactMe") {
            currentPageTimeline = contactMeTimeline;
        }
    }


}

var mainElement = $("main")[0];
var mainHammerOptions = {
    domEvents: true,
    recognizers: [
        [Hammer.Pan, {
            direction: Hammer.DIRECTION_HORIZONTAL
        }],
    ]
};

var pageTransition = new Hammer(mainElement, mainHammerOptions);

    var percentage = 0;

    pageTransition.on("panright", function (ev) {
        // console.log("page panright on end");
        // ev.srcEvent.preventDefault();
        // ev.srcEvent.stopPropagation();

        var current = $(".currentPage").prev(".page");

        if (current.index && current.index() < 0) {
            return;
        }

        percentage = (ev.deltaX / $("main")[0].clientWidth) * 100;

        if(percentage <= 50) {
            dragElement(-Math.abs(percentage));
        } 
        else {
            pageTransition.options.enable = false;
            currentPageTimeline.reverse();
        }
        pageTransition.options.enable = true;

    });

    pageTransition.on("panleft", function (ev) {
        // console.log("page panleft on end");
        // ev.srcEvent.preventDefault();
        // ev.srcEvent.stopPropagation();

        var current = $(".currentPage").next(".page");

        if (current.index && current.index() < 0) {
            return;
        }

        percentage = (ev.deltaX / $("main")[0].clientWidth) * 100;


        if(Math.abs(percentage) <= 50) {
            dragElement(-Math.abs(percentage));
        } else {
            pageTransition.options.enable = false;
        }
        pageTransition.options.enable = true;

});

pageTransition.on("panend", function (ev) {

    if (Math.abs(percentage) <= 50) {
        currentPageTimeline.play();
    } else if (percentage >= 50) {
        moveToSelected("prev", true);
        
    } else if (percentage <= -50) {
        moveToSelected("next", true);

    }
    
});

//  page animations

function animatePageExit(page) {

    var id;

    if (page[0]) {

        id = page[0].id;

    } else {

        id = page.id;
    }

    if (id === "aboutMe") {
        indexPageAnimations("exit")
    } else if (id === "mySkills") {
        skillsPageAnimations("exit");
    } else if (id === "myProjects") {
        projectsPageAnimations("exit");
    } else if (id === "contactMe") {
        contactMePageAnimations("exit")
    }

}

function animatePageEnter(page) {

    var id;

    if (page[0]) {

        id = page[0].id;

    } else {

        id = page.id;
    }

    if (id === "aboutMe") {
        indexPageAnimations("enter")
    } else if (id === "mySkills") {
        skillsPageAnimations("enter");
    } else if (id === "myProjects") {
        projectsPageAnimations("enter");
    } else if (id === "contactMe") {
        contactMePageAnimations("enter")
    }


}


// Timing variable

var animationPlay = .3;



// index page animations



function dragElement (deltaX) {

    currentPageTimeline.pause();
    //adjust the timeline's progress() based on slider value
    currentPageTimeline.progress( deltaX/100 );

    // console.log($("main")[0].clientWidth);
    
}

var indexPageTimeLine = new TimelineLite({paused:true});

indexPageTimeLine.to('.hero_img', animationPlay, {
    x: '0',
    opacity: 1,
    // ease: Power1.easeOut
});
indexPageTimeLine.to('.header', animationPlay, {
    x: '0',
    opacity: 1,
    // ease: Power1.easeOut
}, "-=" + animationPlay/1.1);
indexPageTimeLine.to('.paragraph_text', animationPlay, {
    y: '0',
    opacity: 1,
    // ease: Power1.easeOut
}, "-=" + animationPlay/1.2);



function indexPageAnimations(state) {

    if (state === "exit") {
        
        indexPageTimeLine.reverse();
    } else if (state === "enter") {
        indexPageTimeLine.play();

    } else if (state === "pause") {
        indexPageTimeLine.pause();
    }

}


// skills page animations

$("#play").click(function() {
    skillsPageAnimations ("enter");
});
    
$("#pause").click(function() {
    skillsPageAnimations ("pause");
});

$("#reverse").click(function() {
    
    skillsPageAnimations ("exit");
});

var skillsTimeline = new TimelineLite({paused:true});

skillsTimeline.to('.soft_skills--img-container', animationPlay, {
    x: '0',
    rotation: 720,
    opacity: 1,
    ease: Power1.easeOut
}, .4)
.to('.soft_skills--header', animationPlay, {
    x: '0',
    opacity: 1,
    ease: Power1.easeOut
}, 0.4)
.to('.soft_skills--paragraph', animationPlay, {
    x: '0',
    opacity: 1,
    ease: Power1.easeOut,
}, 0.4)
.to('.skills_selector', animationPlay/2, {
    y: '0',
    opacity: 1,
    ease: Power1.easeOut,
}, .6)
.to('.mongoDbAnimation', animationPlay/2, {
    y: '20',
    opacity: 1,
    ease: Power1.easeOut,
}, 0)
.to('.mongoDbAnimation', animationPlay/2, {
    y: '0',
    opacity: 1,
    ease: Power1.easeOut,
}, .4)
.to('.nodeJSAnimation', animationPlay/2, {
    y: '20',
    opacity: 1,
    ease: Power1.easeOut,
}, 0.1)
.to('.nodeJSAnimation', animationPlay/2, {
    y: '0',
    opacity: 1,
    ease: Power1.easeOut,
}, .5)
.to('.angular2Animation', animationPlay/2, {
    y: '20',
    opacity: 1,
    ease: Power1.easeOut,
}, 0.2)
.to('.angular2Animation', animationPlay/2, {
    y: '0',
    opacity: 1,
    ease: Power1.easeOut,
}, .6)
.to('.htmlAnimation', animationPlay/2, {
    y: '20',
    opacity: 1,
    ease: Power1.easeOut,
}, 0.3)
.to('.htmlAnimation', animationPlay/2, {
    y: '0',
    opacity: 1,
    ease: Power1.easeOut,
}, .7)
.to('.javaScriptAnimation', animationPlay/2, {
    y: '20',
    opacity: 1,
    ease: Power1.easeOut,
}, 0.4)
.to('.javaScriptAnimation', animationPlay/2, {
    y: '0',
    opacity: 1,
    ease: Power1.easeOut,
}, .8)
.to('.cssAnimation', animationPlay/2, {
    y: '20',
    opacity: 1,
    ease: Power1.easeOut,
}, 0.5)
.to('.cssAnimation', animationPlay/2, {
    y: '0',
    opacity: 1,
    ease: Power1.easeOut,
}, .9);


function skillsPageAnimations(state) {

    if (state === "exit") {
        skillsTimeline.reverse();

    } else if (state === "enter") {
        skillsTimeline.play();
        runPercentage()
    }
}

// Project transition

var projectTimeLine = new TimelineMax({paused:true});

projectTimeLine.to(".project_paragraph", animationPlay/2, {
    transform: "perspective(500px) translateZ(0px) ",
    opacity: 1,
    ease: Power1.easeOut
}, .1).to(".prj-hr", animationPlay/2, {
    transform: "perspective(500px) translateZ(0px) ",
    opacity: 1,
    ease: Power1.easeOut
}, .2).to(".project_header", animationPlay/2, {
    transform: "perspective(500px) translateZ(0px) ",
    opacity: 1,
    ease: Power1.easeOut
}, .3).to(".prj_techs", animationPlay/2, {
    transform: "perspective(500px) translateZ(0px) ",
    opacity: 1,
    ease: Power1.easeOut
}, .4).to(".prj_img_container", animationPlay/2, {
    transform: "perspective(500px) translateZ(0px) ",
    opacity: 1,
    ease: Power1.easeOut
}, .5).to(".prj_selector", .1, {
    y: '0',
    opacity: 1,
    ease: Power1.easeOut
}, .1).to('.projectAnim', .001, {
    opacity: 1,
    ease: Power1.easeOut
}, 0);

function projectsPageAnimations(state) {

    if (state === "exit") {

        projectTimeLine.reverse();

    } else if (state === "enter") {

        projectTimeLine.play();

    }
}

// ContactMe transition
const contactMeEllements = document.querySelectorAll(".input_data, .area_data, .g-recaptcha, .contact_me_or, .social_media");

var contactMeTimeline = new TimelineMax({paused: true});

var timeLineInputHeader = animationForInputsEnter(document.getElementsByClassName('contact_me_header')[0]),
    timeLineInputName = animationForInputsEnter(contactMeEllements[0]),
    timeLineInputEmail = animationForInputsEnter(contactMeEllements[1]),
    timeLineInputSubject = animationForInputsEnter(contactMeEllements[2]),
    timeLineInputMessage = animationForInputsEnter(contactMeEllements[3]),
    timeLineInputCaptcha = animationForInputsEnter(contactMeEllements[4]);
    timeLineInputheaderOr = animationForInputsEnter(contactMeEllements[5]);
    timeLineInputSocialButtons = animationForInputsEnter(contactMeEllements[6]);

    // console.log(contactMeEllements);
    

contactMeTimeline.add(timeLineInputHeader)
    .add(timeLineInputName, .1)
    .add(timeLineInputEmail, .2)
    .add(timeLineInputSubject, .3)
    .add(timeLineInputMessage, .4)
    .add(timeLineInputCaptcha, .5)
    .add(timeLineInputheaderOr, .5)
    .add(timeLineInputSocialButtons, .5);

function contactMePageAnimations(state) {


    if (state === "exit") {
        contactMeTimeline.reverse();

    } else if (state === "enter") {
        contactMeTimeline.play();

    }
}


function animationForInputsEnter(input) {

    var timeline = new TimelineMax();

    timeline.to(input, .5, {
        y: '0',
        opacity: 1,
        ease: Power1.easeOut
    }).to(input, .1, {
        y: '-50',
        ease: Power1.easeOut
    }).to(input, .1, {
        y: '0',
        ease: Power1.easeOut
    }).to(input, .1, {
        y: '-25',
        ease: Power1.easeOut
    }).to(input, .1, {
        y: '0',
        ease: Power1.easeOut
    });

    return timeline;
}

function animationForInputsExit(input) {

    var timeline = new TimelineMax();

    timeline.to(input, 1, {
        y: '2000',
        opacity: 0,
        ease: Power1.easeOut
    });

    return timeline;
}


var currentPageTimeline = indexPageTimeLine;