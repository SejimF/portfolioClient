function moveToSelectedProject(elementSelected, swipe) {

    if(elementSelected === "next") {
        var current = $(".current_project_container").next(".project");
    } else if(elementSelected === "prev") {
        var current = $(".current_project_container").prev(".project");
    } else {
        var current = elementSelected;
    }

    if(current.index && current.index() < 0) {
        return;
    }
        
    var next = $(current).next(".project");

    var prev = $(current).prev(".project");

    $(current).removeClass().addClass("project current_project_container");

    

    $(prev).removeClass().addClass("project previus_project_container");
    $(next).removeClass().addClass("project next_project_container");

    $(next).nextAll(".project").removeClass().addClass('project next_project_container');
    $(prev).prevAll(".project").removeClass().addClass('project previus_project_container');
    
    $("."+$(current)[0].id).addClass('active');

    $("."+$(current)[0].id).prevAll(".prj_circle").removeClass('active');
    $("."+$(current)[0].id).nextAll(".prj_circle").removeClass('active');

}