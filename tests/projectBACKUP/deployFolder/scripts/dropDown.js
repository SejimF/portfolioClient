var gamburger = document.getElementById("gamburger");
var dropDownMenu = document.getElementById("dropDownNav");
var blockShadow = document.getElementById("block-shadow");

gamburger.addEventListener("click", switchDropDownMenu);

blockShadow.addEventListener("click", switchDropDownMenu);

function switchDropDownMenu() {

    if(window.innerWidth >= 760) {
        return;
    }
    if(dropDownMenu.classList.contains("move_drop_down_menu")) {
        dropDownMenu.classList.remove("move_drop_down_menu");
        blockShadow.classList.remove("show-block");
        setTimeout(function(){
            blockShadow.style.display = "none";
        }, 500);
        $("body").css({"overflow-y": ""});
    } else {
        blockShadow.style.display = "block";
        $("body").css({"overflow-y": "hidden"});
        setTimeout(function(){
            dropDownMenu.classList.add("move_drop_down_menu");
            blockShadow.classList.add("show-block");
        }, 100);
    }
}