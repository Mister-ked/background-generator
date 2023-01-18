var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var textColor = document.querySelectorAll("textColor")[0];

console.log(textColor)
function setGradient() {
    if (color1.value === "#000000" && color2.value === "#000000") {
        textColor.style.color="#fff"
        
    } else {
        body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
        css.textContent = body.style.background + ";"
    }
    
}
color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)
