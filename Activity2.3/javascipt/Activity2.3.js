var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d")
const centerX = 300;
const centerY = 300;

ctx.strokeStyle = "#242767";
ctx.save();

function draw(color){
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#242767";
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(30,-30);
    ctx.lineTo(3,-206);
    ctx.lineTo(3,0)
    ctx.fill();
    ctx.closePath()

    ctx.lineWidth = 7;
    ctx.strokeStyle = "#242767";
    ctx.fillStyle = "#f6ece0";
    ctx.beginPath();
    ctx.moveTo(-30,-30);
    ctx.lineTo(0,-170);
    ctx.lineTo(0,-4)
    ctx.fill();
    ctx.closePath()

    ctx.stroke();
}

function drawCompass(color){
    ctx.save();
    draw(color);
    ctx.rotate(Math.PI / 2);
    draw(color);
    ctx.rotate(Math.PI / 2);
    draw(color);
    ctx.rotate(Math.PI / 2);
    draw(color);
    ctx.restore();
}

function txt(){
    ctx.lineWidth = 5;
    ctx.font = "40px times";
    ctx.fillStyle = "#22295b";
    ctx.save();
    ctx.translate(288, 310)
    ctx.fillText("N", 0, -230);
    ctx.fillText("E", 230, 0);
    ctx.fillText("S", 0, 240);
    ctx.fillText("W", -240, 0);
    ctx.restore();
}

function circles(x,size,line,color="#242767"){
    ctx.strokeStyle = color;
    ctx.lineWidth = line;
    ctx.beginPath();
    ctx.moveTo(centerX+x,centerY);
    ctx.arc(300,300,size,0,2*Math.PI,false);
    ctx.stroke();
}

function createCircle(){
    ctx.save();
    circles(150,150,3);
    circles(140,140,7,"#e61f2e");
    ctx.restore();
}

function spike(){
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#242767";
    ctx.fillStyle = "#22295b";
    ctx.beginPath();
    ctx.moveTo(53,-144);
    ctx.lineTo(57,-150)
    ctx.lineTo(57,-142)
    ctx.fill();
    ctx.closePath()
    ctx.stroke();
}

function createSpike(){
    ctx.save();
    spike();
    ctx.rotate(Math.PI / 7);
    spike();
    ctx.rotate(Math.PI / 7);
    spike();
    ctx.rotate(Math.PI / 5);
    spike();
    ctx.rotate(Math.PI / 7);
    spike();
    ctx.rotate(Math.PI / 7);
    spike();
    ctx.rotate(Math.PI / 4.5);
    spike();
    ctx.rotate(Math.PI / 7);
    spike();
    ctx.rotate(Math.PI / 7);
    spike();
    ctx.rotate(Math.PI / 4.5);
    spike();
    ctx.rotate(Math.PI / 7);
    spike();
    ctx.rotate(Math.PI / 7);
    spike();
    ctx.restore();
}
    createCircle();
    ctx.translate(300,300);
    ctx.save();
    createSpike();
    ctx.scale(0.6, 0.6);
    ctx.rotate(Math.PI / 4);
    drawCompass("#e61f2e");
    ctx.restore();
    drawCompass("#242767");
    ctx.restore();
    txt();  