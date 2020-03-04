function ClockViewCanvas(){

    let myModel = null;
    let myField = null;
    this.start = function(model, field){
        myModel = model;
        myField = field;

    }

    this.update = function(){
        
    }
}



let canvas = document.createElement("canvas");
document.body.append(canvas);
canvas.setAttribute("height", "600");
canvas.setAttribute('width', '600');
let ctx = canvas.getContext("2d");
ctx.clearRect(0,0,600,600);
ctx.beginPath();
ctx.arc(300, 300, 300, 0, 2 * Math.PI, true);
ctx.moveTo(300, 300);
ctx.stroke();
ctx.closePath();

for(let i = 1; i <= 12; i++){
    ctx.beginPath();
    let x = 300 + 280 * Math.cos(-30*i*(Math.PI/180) + Math.PI/2);
    let y = 300 - 280 * Math.sin(-30*i*(Math.PI/180) + Math.PI/2);
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.strokeText(i, x, y);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.stroke();
    ctx.closePath();	
}

ctx.beginPath();
ctx.moveTo(300, 300);
// ctx.lineTo(300+250*Math.cos(Math.PI/2 - degSec*(Math.PI/180)), 300 - 250*Math.sin(Math.PI/2 - degSec*(Math.PI/180)));
ctx.lineTo(300, 50);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(300, 300);
// ctx.lineTo(300+200*Math.cos(Math.PI/2 - degMin*(Math.PI/180)), 300 - 200*Math.sin(Math.PI/2 - degMin*(Math.PI/180)));
ctx.lineTo(300, 70);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(300, 300);
// ctx.lineTo(300 + 150*Math.cos(Math.PI/2 - degHour*(Math.PI/180)), 300 - 150*Math.sin(Math.PI/2 - degHour*(Math.PI/180)));
ctx.lineTo(300, 100);
ctx.stroke();
ctx.closePath();