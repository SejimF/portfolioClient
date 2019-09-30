// Create a request variable and assign a new XMLHttpRequest object to it.
var http = new XMLHttpRequest();

var url = "https://immense-waters-25821.herokuapp.com/api/contact/contactUs";



function sendEmail() {

        if (grecaptcha.getResponse() == ""){
        $("#error")[0].style.display ="block";
        return;
        }

    var messageToSend = {

        name: $("#contact_me-input--name")[0].value,
        email: $("#contact_me-input--email")[0].value,
        subject: $("#contact_me-input--subject")[0].value,
        message: $("#contact_me-input--message")[0].value,
        lang: $("#contact_me-input--lang")[0].value,
        captchaResponse: grecaptcha.getResponse()
    }

    $(".sendingEmail")[0].style.display = "flex";
    formContainer.style.display = "none"
    $.ajax({
        url: url,
        data: messageToSend,
        type: "POST",
        success: function(result) {

                var afterSubmitContainer = document.getElementById("afterSubmit");
                afterSubmitContainer.style.display = "flex";
                $("#afterSubmit h2").text(result.message);
                $(".sendingEmail")[0].style.display = "none";
        },
        error: function(error) {

                // console.log("error");

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
                grecaptcha.reset();
            })
        },

    });
}

// touch and drops

var size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  }

//   recalculate width and height on resize window

new ResizeSensor(jQuery('body'), function() {
    size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
      }

      if (parseInt($(".contacts_us-button")[0].style.left) > size.width - 120) {
        $(".contacts_us-button")[0].style.left = size.width - 120 + "px";
      } else if(parseInt($(".contacts_us-button")[0].style.top) > size.height - 150) {
        $(".contacts_us-button")[0].style.top = size.height - 150 + "px";
      }

});

var messageUsButton = $(".contacts_us-button");
messageUsButton.draggable({
    scroll: false,
    
    drag: function(event, ui) {
        ui.position.left = Math.min( size.width - 120, ui.position.left );
        ui.position.left = Math.max( 0, ui.position.left );

        ui.position.top = Math.min( size.height - 100, ui.position.top );
        ui.position.top = Math.max( 70, ui.position.top );
    },
    start: function( event, ui ) {
        $(".contact_us--image").addClass("dragging");
    },
    stop: function( event, ui ) {
        $(".contact_us--image").removeClass("dragging");
    }
});

var rect = $(".contacts_us-button")[0].getBoundingClientRect();




Array.prototype.forEach.call(
   document.querySelectorAll("input"),

   function(input, index){
       
    input.addEventListener("input", function(event) {
        if(event.srcElement.value !== "") {
            input.classList.add("touched");
        } else {
            input.classList.remove("touched");
        }
    });
 }

);

var contactUsButton = document.getElementsByClassName("contacts_us-button")[0];
var contactUsForm = document.getElementsByClassName("contacts_us")[0];
var body = document.getElementsByTagName("body")[0];
var contactUsImage = document.getElementsByClassName("contact_us--image")[0];

    contactUsButton.addEventListener("click", function() {
        var body = document.getElementsByTagName("body")[0];
        contactUsForm.classList.toggle("slide-out-blurred-br");
        body.classList.toggle("block-scroll");
        contactUsImage.classList.toggle("rotateToCancel");
        
    });
