function setPercentage(canvasClass, procentId, percentage, colorStroke, colorEmpty) {

    if($(window).width() >= 768) {
        var can = document.getElementsByClassName(canvasClass)[1];
    } else {
        var can = document.getElementsByClassName(canvasClass)[0];
    }

        var spanProcent = document.getElementsByClassName(procentId)[0],
        c = can.getContext('2d');

    var posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * percentage;

    c.lineCap = 'round';
    arcMove();

    function arcMove() {
        var deegres = 0;
        var acrInterval = setInterval(function () {
            deegres += 1;
            c.clearRect(0, 0, can.width, can.height);
            procent = deegres / oneProcent;

            // spanProcent.innerHTML = procent.toFixed();

            c.beginPath();
            c.arc(posX, posY, can.width / 3, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
            c.strokeStyle = colorEmpty;
            c.lineWidth = '3';
            c.stroke();

            c.beginPath();
            c.strokeStyle = colorStroke;
            c.lineWidth = '3';
            c.arc(posX, posY, can.width / 3, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
            c.stroke();
            if (deegres >= result) clearInterval(acrInterval);
        }, fps);
    }


}


function runPercentage() {
        setPercentage('cssCanvas', 'procentCss', 70,  '#146FB2', '#8BA1B1');
        setPercentage('javaScriptCanvas', 'procentJavaScript', 65,   '#E8A04D', '#C7C29F');
        setPercentage('htmlCanvas', 'procentHtml', 60,  '#DD4B25', '#E1B0A3');
        setPercentage('angular2Canvas', 'procentAngular2', 45,   '#C3002F', '#C79FA9');
        setPercentage('nodeJSCanvas', 'procentNodeJS', 50,  '#3C823B', '#92A591');
        setPercentage('mongoDbCanvas', 'procentMongoDb', 40,  '#402F20', '#887F76');
    }