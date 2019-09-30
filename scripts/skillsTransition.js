function moveToSelectedSkill(elementSelected) {

    if (elementSelected === "next") {
        var current = $(".current_skill_container").next(".soft_skills");
    } else if (elementSelected === "prev") {
        var current = $(".current_skill_container").prev(".soft_skills");
    } else {
        var current = elementSelected;
    }

    if (current.index && current.index() < 0) {
        return;
    }

    var next = $(current).next(".soft_skills");

    var prev = $(current).prev(".soft_skills");

    $(current).removeClass().addClass("soft_skills current_skill_container");



    $(prev).removeClass().addClass("soft_skills previus_skill_container");
    $(next).removeClass().addClass("soft_skills next_skill_container");

    $(next).nextAll(".soft_skills").removeClass().addClass('soft_skills next_skill_container');
    $(prev).prevAll(".soft_skills").removeClass().addClass('soft_skills previus_skill_container');

    $("." + $(current)[0].id).addClass('active');

    $("." + $(current)[0].id).prevAll(".skill_circle").removeClass('active');
    $("." + $(current)[0].id).nextAll(".skill_circle").removeClass('active');

}

var skill_index = 0;

// var skillsElement = $(".soft_skills-container")[0];

// var skillsHammerOptions = {
//     domEvents: true,
//     recognizers: [
//         [Hammer.Pan, {
//             direction: Hammer.DIRECTION_HORIZONTAL
//         }],
//     ]
// };

// var skillsTransitionHammer = new Hammer(skillsElement, skillsHammerOptions);


// skills = new Hammer(this, {
//     domEvents: true,
//     recognizers: [
//         [Hammer.Pan, {
//             direction: Hammer.DIRECTION_HORIZONTAL
//         }],
//     ]
// });

// pageTransition.on("panleft", skillsElement, function (ev) {
//         // pageTransition.options.enable = false;
//         console.log("panleft on left");
//         ev.stopPropagation();
//         // console.log(pageTransition.options.enable);
// });

// skillsTransitionHammer.on("panstart", function (ev) {
//     pageTransition.set({ enable: false });
//     console.log("panleft on start");

// });

// skillsTransitionHammer.on("panleft", function (ev) {

//     console.log("panleft on skillsTransitionHammer");
// });

// skillsTransitionHammer.on("panright", function (ev) {

//     console.log("panright on skillsTransitionHammer");
//     // pageTransition.options.enable = true;

// });

// skillsTransitionHammer.on("panend", function (ev) {
//     pageTransition.set({ enable: true });
//     console.log("panleft on end");


// });