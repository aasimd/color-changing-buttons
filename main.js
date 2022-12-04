var red = document.querySelector("#red-btn");
var blue = document.querySelector("#blue-btn");
var yellow = document.querySelector("#yellow-btn");
var box = document.querySelector("#box");
function redClick (){
    box.style.backgroundColor="red";
}

function blueClick(){
    box.style.backgroundColor="blue";
}

function yellowClick(){
    box.style.backgroundColor="yellow";
}
red.addEventListener("click",redClick)
blue.addEventListener("click",blueClick)
yellow.addEventListener("click",yellowClick)
