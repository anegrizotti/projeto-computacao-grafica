"use strict"

const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

var 
x = 100,
y = 100,
larg = 300,
alt = 150,
ang = 0;

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    desenharComTransform();

    //desenharComRotacao();
    //desenharCasinha();
    //desenharRetangulo();
    //desenharCirculo();
    //desenharTriangulo();

    requestAnimationFrame(desenhar);
}

function desenharComTransform() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 250, 100)

    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 250, 100);

    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 250, 100);
}

function desenharComRotacao() {
    x = 200,
    y = 100,
    larg = 10,
    alt = 10;

    ctx.fillStyle = "rgb(0, 0, 200)";
    ctx.strokeStyle = "rgb(255, 128, 0)";
    ctx.lineWidth = 2;
    ctx.save();
        ctx.translate(x, y);
        ctx.rotate(ang);
        ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(50, 0);
        ctx.stroke();
        ctx.fillRect(-larg/2, -alt/2, larg, alt);
    ctx.restore();
}

function desenharCasinha() {
    ctx.fillStyle = "rgb(255, 128, 0)";
    ctx.save();
        ctx.translate(x,y);
        ctx.fillRect(-larg/2, 0, larg, alt)
        ctx.beginPath();
        ctx.moveTo(-larg/2, 0);
        ctx.lineTo(0, -alt);
        ctx.lineTo(larg/2, 0);
        ctx.fill();
    ctx.restore();
}

function desenharRetangulo() {
    ctx.fillStyle = "rgb(255, 128, 0)";
    ctx.fillRect(x, y, larg, alt);
}

function desenharCirculo() {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgb(222, 128, 0)';
    ctx.fill();
}

function desenharTriangulo() {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+50, y+50);
    ctx.lineTo(x-50, y+50);
    ctx.fillStyle = 'rgb(199, 128, 0)';
    ctx.fill();
    ctx.closePath();
}

requestAnimationFrame(desenhar); // desenha na tela

// função que move os desenhos
document.onkeydown = function (evt) {
    if(evt.keyCode === 38) { // cima
        y -= 5;
    }

    else if(evt.keyCode === 40) { // baixo
        y += 5;
    }

    else if (evt.keyCode === 37) { // esquerda
        x -= 5;
    }

    else if (evt.keyCode === 39) { // direita
        x += 5;
    }

    else if (evt.keyCode === 220) { // [
        ang += 5;
    }

    else if (evt.keyCode === 221) { // ]
        ang -= 5;
    }
}
