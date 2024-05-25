var ctx = document.getElementById("myCanvas").getContext("2d");
function Clover(){

    ctx.lineWidth = 10;
    ctx.strokeStyle = "white";

    // Clover
    ctx.arc(150,230,50,0.5,5.5,false);
    ctx.arc(230,170,50,2.5,7,false);
    ctx.arc(310,230,50,10.1,9,false);
    ctx.arc(230,290,50,6,10,false)
    ctx.moveTo(430,230);
    ctx.arc(230,225,200,0,6.5,false)
    
    // Lines
    ctx.moveTo(230,25);
    ctx.lineTo(230,120);
    ctx.moveTo(230,425);
    ctx.lineTo(230,340);
    ctx.moveTo(30,230);
    ctx.lineTo(100,230);
    ctx.moveTo(430,230);
    ctx.lineTo(360,230);
    
    ctx.stroke();
}

Clover();