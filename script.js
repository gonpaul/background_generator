
var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
// var body = document.getElementsByTagName('body');
// byTagName does not show html code, it shows an object instead
var body = document.getElementById("gradient");
var btn = document.querySelector(".btn");

setGradient();

function randomColor() {
    return Math.floor(Math.random()*255);
}

function generateRandom() {
    // add eventListener and a function that generates two
    //rgb numbers 'rgb(' + red + ',' + green + ',' + blue + ')';
    
    color1 = "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
    color2 = "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";

    body.style.background = 
	"linear-gradient(to right, " + color1 + ", " + color2 + ")";

    css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
// if we add parentheses, it means that we will call
// the function when we addEventListener, but we want
// to call this function each time when there is an input

color2.addEventListener("input", setGradient);

btn.addEventListener("click", generateRandom);