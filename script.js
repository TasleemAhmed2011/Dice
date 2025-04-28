var dice;
var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var stop = true;
var t;

function change() {
    var random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgcolor = "rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.backgroundColor = bgcolor;
}

function startstop() {
    if (stop) {
        stop = false;
        t = setInterval(change, 500);
    } else {
        stop = true;
        clearInterval(t);
    }
}

window.onload = function () {
    dice = document.getElementById("dice");
}