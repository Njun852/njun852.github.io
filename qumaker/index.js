var color = document.getElementById("color")
var math = document.getElementById("math")
var sound = document.getElementById("sounds")
var shape = document.getElementById("shapes")

function toColors(){
    window.location.href = "Colors.html?";
}
function toMath(){
    window.location.href = "Math.html?";
}
function toSounds(){
    window.location.href = "Sounds.html?";
}
function toShapes(){
    window.location.href = "Shapes.html?";
}

color.addEventListener('click', toColors)
math.addEventListener('click', toMath)
sound.addEventListener('click', toSounds)
shape.addEventListener('click', toShapes)