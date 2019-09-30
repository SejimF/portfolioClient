var url = "https://immense-waters-25821.herokuapp.com/api/contact/contactUs";

function sendEmail() {

        if (grecaptcha.getResponse() == ""){

            $(".g-recaptcha")[0].style.border ="2px solid red";
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

    $(".sendMessage")[0].style.display = "none";
    $(".messageSending")[0].style.display = "block";
    $.ajax({
        url: url,
        data: messageToSend,
        type: "POST",
        success: function(result) {
            console.log("success");
            $(".messageSending")[0].style.display = "none";
            $(".messageSended")[0].style.display = "block";
            
        },
        error: function(error) {
console.log("error");
$(".messageSending")[0].style.display = "none";
$(".messageError")[0].style.display = "block";

        },

    });
}