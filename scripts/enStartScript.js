function downloadJSAtOnload() {

    var jquery = document.createElement("script");
    jquery.src = "../scripts/jquery-3.4.1.min.js";
    document.body.appendChild(jquery);
    jquery.onload = function () {
        loadJQueryRelatedScripts();

    };
}
if (window.addEventListener) {
    window.addEventListener("load", downloadJSAtOnload, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", downloadJSAtOnload);
} else {
    window.onload = downloadJSAtOnload;
}



function initImages() {

    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        }
    }
}

function loadJQueryRelatedScripts() {

    setTimeout(function () {

        var resizeSensor = document.createElement("script");
        resizeSensor.src = "./scripts/ResizeSensor.js";
        document.body.appendChild(resizeSensor);

        initImages();


        var polyfill = document.createElement("script");
        polyfill.src = "../scripts/polyfills.js";
        document.body.appendChild(polyfill);

        var restCss = document.createElement("link");
        restCss.rel = "stylesheet";
        restCss.href = "../css/restStyles.min.css";
        document.body.appendChild(restCss);

        var fontAwesome = document.createElement("link");
        fontAwesome.rel = "stylesheet";
        fontAwesome.integrity =
            "sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay";
        fontAwesome.href = "https://use.fontawesome.com/releases/v5.8.2/css/all.css";
        fontAwesome.crossOrigin = "anonymous";
        document.body.appendChild(fontAwesome);

        var jqueryUi = document.createElement("script");
        jqueryUi.src = "../scripts/jquery-ui.min.js";
        jqueryUi.defer = true;
        document.body.appendChild(jqueryUi);
        jqueryUi.onload = function () {

            var jqueryUiTouch = document.createElement("script");
            jqueryUiTouch.src = "../scripts/jquery.ui.touch-punch.min.js";
            jqueryUiTouch.defer = true;
            document.body.appendChild(jqueryUiTouch);
            jqueryUiTouch.onload = function () {

                var hammer = document.createElement("script");
                hammer.src = "../scripts/hammer.min.js";
                document.body.appendChild(hammer);
                hammer.defer = true;
                hammer.onload = function () {
                    loadOthersJS();
                };
            };
        };
    }, 2000);
}

function loadOthersJS() {

    window.fbAsyncInit = function() {
  FB.init({
    appId            : '597853417401566',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v3.3'
  });
};
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return};
   js = d.createElement(s);
   js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

    var compressed = document.createElement("script");
    compressed.src = "../scripts/compressed.min.js";
    document.body.appendChild(compressed);

    var recaptcha = document.createElement("script");
    recaptcha.async = true;
    recaptcha.src = "https://www.google.com/recaptcha/api.js";
    document.body.appendChild(recaptcha);
}