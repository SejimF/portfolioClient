var language;

function setUpLanguage() {
    // $('#div1').text(language.date);
    translateStaticTextInHTML();
    setProjects();
    setMetadataImageUrl();
}

function getLanguage() {
    // console.log("location.href");
    // console.log(location.origin + "/public/close.svg");

    // console.log("meta img");
    // console.log($("meta "));
    
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({ 
    url:  '/scripts/language/' +  localStorage.getItem('language') + '.json', 
    dataType: 'json', async: false, dataType: 'json', 
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
    // console.log("language");
    // console.log();
    

//          ------- HEADER NAV ------
var selectOptionLangEn = document.getElementById("langEn");

    $(".aboutMeLink").text(language.header.aboutMe);
    $(".mySkillsLink").text(language.header.mySkills);
    $(".myProjectsLink").text(language.header.myProjects);
    $(".myContactsLink").text(language.header.myContacts);

    $("select #langChoice").text(language.header.langChoice);
    $("select #langEn").text(language.header.langEn);
    $("select #langRu").text(language.header.langRu);
    $("select #langGr").text(language.header.langGr);
    
//          ------- CONTAINER FOR GREETING ------
    $(".my_name_section img")[0].src = language.greeting;
    // console.log($(".my_name_section img")[0].src);

//          ------- ABOUT ME ------
    
    $("#aboutMeHeader").text(language.aboutMe.header);
    $("#aboutMeDescription").text(language.aboutMe.description);
    $("#signature").text(language.aboutMe.signature);

//          ------- HEADER AND PARAGRAPHS ON MAIN PAGE AND FOOTER ------
    
    $("#mySkills").text(language.skillsHeader);
    $("#myProjects").text(language.projectsHeader);
    $("#findMeHere").text(language.footer.mySocial);
    $("#madeBy").text(language.footer.madeBy);

//          ------- CONTACT ME FORM ------

$("#contact_me--header").text(language.sendMeAMessageForm.sendMeAMessageHeader);
// $("#contact_me--paragraph").text(language.sendMeAMessageForm.receiveNotification);

// label
// console.log(`$("label[for='name']")[0]`);
// console.log($("label[for='name']")[0]);


$("label[for='name']")[0].append(language.sendMeAMessageForm.label.name);
$("label[for='email']")[0].append(language.sendMeAMessageForm.label.email);
$("label[for='subject']")[0].append(language.sendMeAMessageForm.label.subject);
$("label[for='message']")[0].append(language.sendMeAMessageForm.label.message);

// input polaceholders

$("#contact_me-input--name").attr("placeholder", language.sendMeAMessageForm.name).val("").focus().blur();
$("#contact_me-input--email").attr("placeholder", language.sendMeAMessageForm.email).val("").focus().blur();
$("#contact_me-input--subject").attr("placeholder", language.sendMeAMessageForm.subject).val("").focus().blur();
$("#contact_me-input--message").attr("placeholder", language.sendMeAMessageForm.message).val("").focus().blur();
$("#contact_me-input--button").text(language.sendMeAMessageForm.buttonMessage);
$("#contact_me-input--lang").attr("value", localStorage.getItem('language')); 
// text(language.sendMeAMessageForm.lang);

}


function notFoundPage() {
    $("#haventMade").text(language.forOfor.haventMade);
    $("#linkTitle").text(language.forOfor.linkTitle);
}

// POLIFIL FOR IE


(function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('append')) {
        return;
      }
      Object.defineProperty(item, 'append', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
          
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

