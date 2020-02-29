
function showTime() {
    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hr = now.getHours();

    let ctx = document.getElementById("canvas").getContext("2d");
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

    let degSec = 6*sec;
    let degMin = 6*(min + (1/60)*sec);
    let degHour = 30*(hr + (1/60)*min); 

    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(300+250*Math.cos(Math.PI/2 - degSec*(Math.PI/180)), 300 - 250*Math.sin(Math.PI/2 - degSec*(Math.PI/180)));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(300+200*Math.cos(Math.PI/2 - degMin*(Math.PI/180)), 300 - 200*Math.sin(Math.PI/2 - degMin*(Math.PI/180)));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(300 + 150*Math.cos(Math.PI/2 - degHour*(Math.PI/180)), 300 - 150*Math.sin(Math.PI/2 - degHour*(Math.PI/180)));
    ctx.stroke();
    ctx.closePath();
}


setInterval(showTime, 1000);




