var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");  
var s = 1;
ctx.lineWidth = 8 + s;

function upper(){
var x = document.getElementById('txtX').value;
var y = document.getElementById('txtY').value;
var size = document.getElementById('size').value;
clearCanvas()
ctx.beginPath();
ctx.arc(x,y,size*20,0,1*Math.PI,true);
ctx.closePath();
ctx.fillStyle = "#e41a23";
ctx.fill();
ctx.stroke();
}

function middle(){
var x = document.getElementById('txtX').value;
var y = document.getElementById('txtY').value;
var size = document.getElementById('size').value;
ctx.beginPath();
ctx.arc(x,y,size*15/2,0,2*Math.PI,true);
ctx.fillStyle = "#f5f5f5";
ctx.fill();
ctx.stroke();
}

function lower(){
var x = document.getElementById('txtX').value;
var y = document.getElementById('txtY').value;
var size = document.getElementById('size').value;
ctx.beginPath();
ctx.arc(x,y,size*20,0,1*Math.PI,false);
ctx.closePath();
ctx.fillStyle = "#f5f5f5";
ctx.fill();
ctx.stroke();
}

function clearCanvas() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

upper();
lower();
middle();