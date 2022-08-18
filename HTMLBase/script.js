"use strict"

const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

function desenharRetangulo() {
    var 
    x = 200,
    y = 100,
    larg = 300,
    alt = 150;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(255, 128, 0)";
    ctx.fillRect(x, y, larg, alt);
    requestAnimationFrame(desenhar);
}

function desenharCirculo() {
    var x = canvas.width / 1.5;
    var y = canvas.height / 1.5;
    var r = 45;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgb(255, 128, 0)';
    ctx.fill();
    ctx.stroke();
}

requestAnimationFrame(desenharRetangulo);
requestAnimationFrame(desenharCirculo);

document.onkeydown = function (evt) {
    if(evt.keyCode === 38) {
         y -= 5;
    }

    else if(evt.keyCode === 40) {
        y += 5;
    }

    else if (evt.keyCode === 37) {
        x -= 5;
    }

    else if (evt.keyCode === 39) {
        x += 5;
    }
}
