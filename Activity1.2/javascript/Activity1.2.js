            var canvas = document.getElementById('myCanvas');  
            var ctx = canvas.getContext('2d');

            ctx.lineWidth = 15;
            ctx.strokeStyle = "white";

            // // Letter A
            ctx.beginPath();
            ctx.moveTo(45,158);
            ctx.lineTo(45,60);
            ctx.lineTo(55,50);
            ctx.lineTo(95,50);
            ctx.lineTo(105,60);
            ctx.lineTo(105,158);
            ctx.moveTo(40,105);
            ctx.lineTo(100,105);
                     
            // Letter M
            ctx.moveTo(155, 158);
            ctx.lineTo(155, 50);
            ctx.lineTo(165, 50); 
            ctx.lineTo(190,150);
            ctx.lineTo(195,150);
            ctx.lineTo(218,50);
            ctx.lineTo(228,50);
            ctx.lineTo(228,158);

            // Letter O
            ctx.moveTo(310,150);
            ctx.lineTo(290,150);
            ctx.lineTo(280,140);
            ctx.lineTo(280,60);
            ctx.lineTo(290,50);
            ctx.lineTo(330,50);
            ctx.lineTo(340,60);
            ctx.lineTo(340,140);
            ctx.lineTo(330,150);
            ctx.lineTo(310,150);
           

            // Letter G
            ctx.moveTo(455, 60);
            ctx.lineTo(440, 50);
            ctx.lineTo(400, 50);
            ctx.lineTo(390, 60);
            ctx.lineTo(390, 140);
            ctx.lineTo(400, 150);
            ctx.lineTo(440, 150);
            ctx.lineTo(450, 140);
            ctx.lineTo(450, 100);
            ctx.lineTo(420, 100);

            ctx.stroke();