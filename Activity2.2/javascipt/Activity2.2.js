var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d"); 

function gradient(){
var gradient = ctx.createLinearGradient(400,600, 400, 0);
gradient.addColorStop(1, "#47b1e9");
gradient.addColorStop(0, "#e5b3d5");
ctx.fillStyle = gradient;
ctx.fillRect(0,0,800,600);
}

function coin(){

ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.arc(400,300,5*40,0,2*Math.PI, false);
ctx.lineWidth = 10;

var gradient = ctx.createLinearGradient(400,600, 400, 0);
gradient.addColorStop(0, "#ccaad0");
// gradient.addColorStop(0.2, "#e4a8d0");
gradient.addColorStop(1, "#f17588");

ctx.fillStyle = gradient;
ctx.fill();

ctx.stroke();

}

function coin2(){
ctx.beginPath();
ctx.moveTo(560,300);
ctx.strokeStyle = "white";
ctx.arc(400,300,5*32,0,2*Math.PI, false);
ctx.stroke()
}

function crown(){
    ctx.beginPath()
    ctx.strokeStyle = "white";
    ctx.fillStyle = "rgb(255,255,255,0.8)";
    ctx.moveTo(310, 380);
    ctx.lineTo(270, 270);
    ctx.quadraticCurveTo(260, 250, 290, 260);
    ctx.lineTo(350,280);
    ctx.lineTo(390,180);
    ctx.quadraticCurveTo(400, 160, 410, 180);
    ctx.lineTo(450,280);
    ctx.lineTo(510,260)
    ctx.quadraticCurveTo(540, 250, 530, 270);
    ctx.lineTo(480,380);
    ctx.closePath()
    ctx.fill();
    // canvas.style.filter = "blur(5px)";
    ctx.stroke();
}

ctx.scale(0.75, 0.75);
gradient();
coin();
coin2();
crown();