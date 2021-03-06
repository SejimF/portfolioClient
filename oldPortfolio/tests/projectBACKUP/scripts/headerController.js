var header = document.getElementById('nav');
var dropDownNav = document.getElementById("dropDownNav");
var contactUsForm = document.getElementsByClassName("contacts_us")[0];

let last_known_scroll_position = 0;
let ticking = false;

function hideOrShowHeader(scroll_pos) {

    if(window.pageYOffset > last_known_scroll_position && window.pageYOffset > 100) {
        header.classList.add("hide_nav_bar");
      } else {
        header.classList.remove("hide_nav_bar");       
      }
      last_known_scroll_position = window.scrollY;
}

function activateCurrentSectionInHeader(scroll_pos) {
    
  // Get sizes of sectors and manipulate current sector in view

  // if(isInViewport($("#mySkillsSection")[0])) {
  //   console.log("IN veiwport mySkillsSection");
    
  // } else if(isInViewport($("#projects")[0])) {
  //   console.log("IN veiwport myProjects");
  // }

  if(scroll_pos <  $("#mySkillsSection")[0].offsetTop - 300) {

    console.log("scroll_pos");
    console.log(scroll_pos);

    var aboutMe = $(".aboutMeLI");
    aboutMe.each(function() {
      $( this ).addClass( "activeted" );
      $( this ).nextAll().removeClass("activeted");
    })

  } else if(scroll_pos <  $("#myProjects")[0].offsetTop - 300) {
    var mySkills = $(".mySkillsLI");
    mySkills.each(function() {
      $( this ).addClass( "activeted" );

      $( this ).prevAll().removeClass("activeted");
      $( this ).nextAll().removeClass("activeted");
    })

    // $(mySkills).prevAll().removeClass("activeted");
    // $(mySkills).nextAll().removeClass("activeted");
  } else if(scroll_pos <  $("#findMeHere")[0].offsetTop - 300) {
    var myProjects = $(".myProjectsLI");
    myProjects.each(function() {
      $( this ).addClass( "activeted" );
      
      $( this ).prevAll().removeClass("activeted");
      $( this ).nextAll().removeClass("activeted");
    })
  } else {
    var myContacts = $(".myContactsLI");
    myContacts.each(function() {
      $( this ).addClass( "activeted" );

      $( this ).prevAll().removeClass("activeted");
    })
}
}

function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


window.addEventListener('scroll', function(e) {
    if(dropDownNav.classList.contains("move_drop_down_menu")) {
        return;
      }

      
      
      
  if (!ticking) {
    window.requestAnimationFrame(function() {
      hideOrShowHeader(last_known_scroll_position);
      activateCurrentSectionInHeader(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }


});