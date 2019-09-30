


function convertToRoman(num) {

    if(num < 0) {
        num = Math.abs(num);
    }

    // num = document.getElementById("romanInput").value;

    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  
    var romanized = '';
  
    for (var index = 0; index < decimalValue.length; index++) {

      while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];       
        /* 
        If at decimalValue[0] <= 5000   romanize += "M"
        */
        num -= decimalValue[index];
        // Minus 1000 at first loop
        }
    }
  
    document.getElementsByClassName("roman")[0].innerText = romanized;

    return romanized;
  }


//   CONVERT TO ARABIC FROM ROMAN NUMBERS
function convertToArabic(numb) {

    // var numb = document.getElementById('arabInput').value;
    var numbersMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    var result = 0,
    current,
    previus = 0;
    for(const char of numb.split("").reverse()) {
        current = numbersMap.get(char);
        if(current >= previus) {
            result+= current;
        } else {
            result -= current;
        }
        previus = current;
    }

    console.log(convertToRoman(result));
    if(convertToRoman(result) !== numb) {
        // console.log()
        document.getElementsByClassName("arabic")[0].innerText = "Bad format";
    } else {
        document.getElementsByClassName("arabic")[0].innerText = result;

    }
    // convertToRoman(result)

    console.log(result,"color:white;background:red");

}

function fromArabic() {
    
    document.getElementsByClassName("arabicInput")[0].style.display = "flex";
    document.getElementsByClassName("romanInput")[0].style.display = "none";

    document.getElementsByClassName("arabic")[0].style.display = "block";
    document.getElementsByClassName("roman")[0].style.display = "none";

    document.getElementsByClassName("toRoman")[0].classList.remove("activated");
    document.getElementsByClassName("toArabic")[0].classList.add("activated");
}

function fromRoman() {
    
    document.getElementsByClassName("arabicInput")[0].style.display = "none";
    document.getElementsByClassName("romanInput")[0].style.display = "flex";

    document.getElementsByClassName("arabic")[0].style.display = "none";
    document.getElementsByClassName("roman")[0].style.display = "block";

    document.getElementsByClassName("toRoman")[0].classList.add("activated");
    document.getElementsByClassName("toArabic")[0].classList.remove("activated");
}

