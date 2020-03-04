function qwe(){
    let canvas = document.createElement('canvas');
    document.body.append(canvas);
    canvas.setAttribute('width', '600');
    canvas.setAttribute('height', '600');
    return canvas;
}


function createCircle(){
    // let canvas = document.createElement('canvas');
    // document.body.append(canvas);
    // canvas.setAttribute('width', '600');
    // canvas.setAttribute('height', '600');
    let asd =  qwe();
    let ctx = asd.getContext("2d");
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

    return ctx;
}



function showTime() {
    let qwe = createCircle();
    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hr = now.getHours(); 

    qwe.beginPath();
    qwe.moveTo(300, 300);
    qwe.lineTo(300+250*Math.cos(Math.PI/2 - (6*sec)*(Math.PI/180)), 300 - 250*Math.sin(Math.PI/2 - (6*sec)*(Math.PI/180)));
    qwe.stroke();
    qwe.closePath();

    qwe.beginPath();
    qwe.moveTo(300, 300);
    qwe.lineTo(300+200*Math.cos(Math.PI/2 - (6*(min + (1/60)*sec))*(Math.PI/180)), 300 - 200*Math.sin(Math.PI/2 - (6*(min + (1/60)*sec))*(Math.PI/180)));
    qwe.stroke();
    qwe.closePath();

    qwe.beginPath();
    qwe.moveTo(300, 300);
    qwe.lineTo(300 + 150*Math.cos(Math.PI/2 - (30*(hr + (1/60)*min))*(Math.PI/180)), 300 - 150*Math.sin(Math.PI/2 - (30*(hr + (1/60)*min))*(Math.PI/180)));
    qwe.stroke();
    qwe.closePath();
}


setInterval(showTime, 1000);




