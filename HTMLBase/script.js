"use strict"

const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

var 
x = 200,
y = 100,
larg = 300,
alt = 150;

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(255, 128, 0)";
    ctx.fillRect(x, y, larg, alt);
    requestAnimationFrame(desenhar);
}

requestAnimationFrame(desenhar);

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
