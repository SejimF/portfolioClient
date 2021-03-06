// Create a request variable and assign a new XMLHttpRequest object to it.
var http = new XMLHttpRequest();

var url = "http://localhost:8090/api/contact/contactUs";



function sendEmail() {
    // console.log($("#contact_me-input--name")[0].value);
    // console.log("grecaptcha");

    //     if (grecaptcha.getResponse() == ""){
    //     $("#error")[0].style.display ="block";
    //     return;
    // }

    const messageToSend = {

        name: $("#contact_me-input--name")[0].value,
        email: $("#contact_me-input--email")[0].value,
        subject: $("#contact_me-input--subject")[0].value,
        message: $("#contact_me-input--message")[0].value,
        lang: $("#contact_me-input--lang")[0].value,
        captchaResponse: grecaptcha.getResponse()
    }

    // console.log(`$(".sendingEmail")[0]`);
    // console.log();
    $(".sendingEmail")[0].style.display = "flex";
    formContainer.style.display = "none"
    $.ajax({
        url: url,
        data: messageToSend,
        type: "POST",
        success: function(result) {

            console.log("result");
                
                var formContainer = document.getElementById("formContainer");
                
                var afterSubmitContainer = document.getElementById("afterSubmit");
                afterSubmitContainer.style.display = "flex";
                $("#afterSubmit h2").text(result.message);
                // $("#afterSubmit p").text(result.message);
                $(".sendingEmail")[0].style.display = "none";
        },
        error: function(error) {

                console.log("error");

                $(".sendingEmail")[0].style.display = "none";

            var formContainer = document.getElementById("formContainer");
            formContainer.style.display = "none"
            var afterSubmitContainer = document.getElementById("afterSubmit");
            afterSubmitContainer.style.display = "flex";
            $("#afterSubmit h2").text(error.responseJSON.result);
            $("#afterSubmit p").text(error.responseJSON.message);
            var backButton = $(".afterSubmitButton")[0];
            backButton.style.display = "block";
            backButton.addEventListener("click", function(){
                var formContainer = document.getElementById("formContainer");
                formContainer.style.display = "flex"
                var afterSubmitContainer = document.getElementById("afterSubmit");
                afterSubmitContainer.style.display = "none";
                $("#afterSubmit h2").text("");
                $("#afterSubmit p").text("");
                backButton.style.display = "none";
            })
        },

    });

    // console.log("result");
    // console.log("grecaptcha");
    // console.log(grecaptcha);

    // if (grecaptcha.getResponse() == ""){
    //     $("#error")[0].style.display ="block";
    //     return;
    // }
}

Array.prototype.forEach.call(
   document.querySelectorAll("input"),

   function(input, index){
       
    input.addEventListener("input", function(event) {
        if(event.srcElement.value !== "") {
            input.classList.add("touched");
        } else {
            input.classList.remove("touched");
        }
    })
    // input.value = 'hello ' + index;
    // console.log("input");
    // console.log(input);
 }


//    input.value.addEventListener("input", function(event) {
//         if(event.srcElement.value !== "") {
//             elements.classList.add("touched");
//         } else {
//             elements.classList.remove("touched");
//         }
//     })
);


// var input = document.querySelectorAll(".input");

// input.forEach(function(elements) {

//     var changed = false;

//     elements.addEventListener("input", function(event) {
//         if(event.srcElement.value !== "") {
//             elements.classList.add("touched");
//         } else {
//             elements.classList.remove("touched");
//         }
//     });
// });


// Show contact us form

var contactUsButton = document.getElementsByClassName("contacts_us-button")[0];
var contactUsForm = document.getElementsByClassName("contacts_us")[0];
var body = document.getElementsByTagName("body")[0];
var contactUsImage = document.getElementsByClassName("contact_us--image")[0];

    contactUsButton.addEventListener("click", function() {
        var body = document.getElementsByTagName("body")[0];
        contactUsForm.classList.toggle("slide-out-blurred-br");
        // contactUsForm.classList.toggle("slide-in-blurred-br");
        body.classList.toggle("block-scroll");
        contactUsImage.classList.toggle("rotateToCancel");
        
    });
