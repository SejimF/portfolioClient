var language;

getLanguage();
setUpLanguage();


function setUpLanguage() {
    translateStaticTextInHTML();
    // setProjects();
    setMetadataImageUrl();
}

function getLanguage() {
    
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({ 
    url:  './scripts/language/' +  localStorage.getItem('language') + '.json', 
    dataType: 'json', async: false,
    success: function (lang) {
          language = lang;
        } });
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        getLanguage();
        location.href = "./" + lang + ".html";    
        }

function redirectToTranslatedFile() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    location.href = "./" + localStorage.getItem('language') + ".html";
}

function setMetadataImageUrl() {
    var ogImageUrl = document.createElement("meta");
    ogImageUrl.setAttribute('property', 'og:image');
    ogImageUrl.content = location.origin + language.meta.imgUrl;
    document.getElementsByTagName('head')[0].appendChild(ogImageUrl);
}

function translateStaticTextInHTML() {

//          ------- HEADER NAV ------

    // $(".aboutMeLink").text(language.header.aboutMe);
    // $(".mySkillsLink").text(language.header.mySkills);
    // $(".myProjectsLink").text(language.header.myProjects);
    // $(".myContactsLink").text(language.header.myContacts);

    // $("select #langChoice").text(language.header.langChoice);
    // $("select #langEn").text(language.header.langEn);
    // $("select #langRu").text(language.header.langRu);
    // $("select #langGr").text(language.header.langGr);
    

//          ------- ABOUT ME ------
    
    $("#aboutMeHeader").text(language.aboutMe.header);
    $("#aboutMeDescription").text(language.aboutMe.description);
    $("#signature").text(language.aboutMe.signature);

    //          ------- ABOUT ME ------

    // problem solving

    $("#problem_solving--header").text(language.softSkills.problemSolving.title);
    $("#problem_solving--paragraph").text(language.softSkills.problemSolving.paragraph);

    // Communicating

    $("#comunication--header").text(language.softSkills.communicating.title);
    $("#comunication--paragraph").text(language.softSkills.communicating.paragraph);

    // problem solving

    $("#organised--header").text(language.softSkills.organised.title);
    $("#organised--paragraph").text(language.softSkills.organised.paragraph);

    //    ---------- COOIKES ---------------------

    $("#cookiesNotification").text(language.cookies);
    $("#cookiesButton").text(language.cookiesButton);

//          ------- HEADER AND PARAGRAPHS ON MAIN PAGE AND FOOTER ------
    
    $("#mySkills").text(language.skillsHeader);
    $("#myProjects").text(language.projectsHeader);
    $("#findMeHere").text(language.footer.mySocial);
    $("#madeBy").text(language.footer.madeBy);

//          ------- CONTACT ME FORM ------

$("#contact_me--header").text(language.sendMeAMessageForm.sendMeAMessageHeader);
// $("#contact_me--paragraph").text(language.sendMeAMessageForm.receiveNotification);

// label

if($("label[for='name']")[0]) {
    $("label[for='name']")[0].append(language.sendMeAMessageForm.label.name);
    $("label[for='email']")[0].append(language.sendMeAMessageForm.label.email);
    $("label[for='subject']")[0].append(language.sendMeAMessageForm.label.subject);
    $("label[for='message']")[0].append(language.sendMeAMessageForm.label.message);    

      //  CHECK IF COOKIES HAVE BEEN ACCEPTED

  if (localStorage.getItem('cookies') == "accepted") {
    $(".cookies")[0].style.display = "none";
} else {
  $(".cookies")[0].style.display = "block";
}
}


// input polaceholders

$("#contact_me-input--name").attr("placeholder", language.sendMeAMessageForm.name).val("").focus().blur();
$("#contact_me-input--email").attr("placeholder", language.sendMeAMessageForm.email).val("").focus().blur();
$("#contact_me-input--subject").attr("placeholder", language.sendMeAMessageForm.subject).val("").focus().blur();
$("#contact_me-input--message").attr("placeholder", language.sendMeAMessageForm.message).val("").focus().blur();
$("#contact_me-input--button").text(language.sendMeAMessageForm.buttonMessage);
$("#contact_me-input--lang").attr("value", localStorage.getItem('language')); 

}


function notFoundPage() {
    $("#haventMade").text(language.forOfor.haventMade);
    $("#linkTitle").text(language.forOfor.linkTitle);
}





//  ACCEPT COOKIES

function acceptCookies() {
    localStorage.setItem('cookies', "accepted");
    $(".cookies")[0].style.display = "none";
}
