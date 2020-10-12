// model

function Clock(){
    this.X = 0;
    this.Y = 0;
    
    let myView = null;
    let timerId = null;

    this.init = function(view) {
        myView = view;
    };

    this.updateView = function() {
        if (myView)
            myView.update();
    };

    this.drawHands = function(){
        let now = new Date();
        let sec = now.getSeconds();
        // let min = now.getMinutes();
        // let hr = now.getHours(); 
        this.X = 300 + 250 * Math.cos(Math.PI/2 - (sec*6)*(Math.PI/180));
        this.Y = 300 - 250 * Math.sin(Math.PI/2 - (sec*6)*(Math.PI/180));
        this.updateView();
    };

    this.start = function(){
        timerId = setInterval(this.drawHands.bind(this), 1000);
    };

    this.stop = function(){
        clearInterval(timerId);
        this.updateView();
    };
};

// view

function ClockViewCanvas(){

    let myModel = null;
    let myDrawClockFunc = null;

    this.init = function(model, drawClockFunc){
        myModel = model;
        myDrawClockFunc = drawClockFunc;
        // draw();
    };

    // draw = function(){
    //     myDrawClockFunc(myModel.X, myModel.Y);
    // }

    this.update = function(){
        myDrawClockFunc(myModel.X, myModel.Y);
    };
};

// Controller

function ManControllerButtons(){

    let myModel = null;

    this.init = function(model){
        myModel = model;

        let buttonStart = document.getElementById('start');
        buttonStart.addEventListener('click', this.start);
        let buttonStop = document.getElementById('stop');
        buttonStop.addEventListener('click', this.stop);
    };

    this.start = function(){
        myModel.start();
    };

    this.stop = function(){
        myModel.stop();
    };
};

function createClockSvg(x,y){
    let svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    document.body.append(svg);
    svg.setAttribute('width', '600');
    svg.setAttribute('height', '600');
    let circle = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    svg.append(circle);
    circle.setAttribute('cx', '300');
    circle.setAttribute('cy', '300');
    circle.setAttribute('r', '300');
    circle.setAttribute('stroke', 'black');
    circle.setAttribute('fill', 'white');
    let text = document.createElementNS("http://www.w3.org/2000/svg",'text');
    svg.append(text);
    text.classList.add('time');
    text.setAttribute('x', '47%');
    text.setAttribute('y', '100');

    let g = document.createElementNS('http://www.w3.org/2000/svg','g');
    svg.append(g);
    for (let i = 12; i > 0; i--){
        let miniCircle = document.createElementNS("http://www.w3.org/2000/svg",'circle');
        g.append(miniCircle);
        miniCircle.setAttribute('cx', `${300+(280 * Math.cos(-30*i*(Math.PI/180) + Math.PI/2))}`);
        miniCircle.setAttribute('cy', `${300-(280 * Math.sin(-30*i*(Math.PI/180) + Math.PI/2))}`);
        miniCircle.setAttribute('r', '15');
        miniCircle.setAttribute('fill', 'orange');
        let num = document.createElementNS("http://www.w3.org/2000/svg",'text');
        g.append(num);
        num.append(i);
        num.setAttribute('x', `${300+(280 * Math.cos(-30*i*(Math.PI/180) + Math.PI/2))}`);
        num.setAttribute('y', `${300-(280 * Math.sin(-30*i*(Math.PI/180) + Math.PI/2))}`);
        num.setAttribute('text-anchor', 'middle');
        num.setAttribute('dominant-baseline', 'middle');
    }

    let secondLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    svg.append(secondLine);
    secondLine.classList.add('second');
    secondLine.setAttribute('transform-origin', '50% 50%');
    secondLine.setAttribute('x1', '300');
    secondLine.setAttribute('y1', '300');
    secondLine.setAttribute('x2', x);
    secondLine.setAttribute('y2', y);
    secondLine.setAttribute('stroke', 'black');

    let minuteLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    svg.append(minuteLine);
    minuteLine.classList.add('minute');
    minuteLine.setAttribute('x1', '300');
    minuteLine.setAttribute('y1', '300');
    // minuteLine.setAttribute('x2', x*(min + (1/60)));
    // minuteLine.setAttribute('y2', y*(min + (1/60)));
    minuteLine.setAttribute('stroke', 'black');
    minuteLine.setAttribute('transform-origin', '50% 50%');

    let hourLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    svg.append(hourLine);
    hourLine.classList.add('hour');
    hourLine.setAttribute('x1', '300');
    hourLine.setAttribute('y1', '300');
    hourLine.setAttribute('x2', '300');
    hourLine.setAttribute('y2', '150');
    hourLine.setAttribute('stroke', 'black');
    hourLine.setAttribute('transform-origin', '50% 50%');
};

function createClockCanvas(x,y){  
    let canvas = document.createElement('canvas');
    document.body.append(canvas);
    canvas.setAttribute('width', '600');
    canvas.setAttribute('height', '600');
    // let ctx = document.getElementById("canvas").getContext('2d');
    let ctx = canvas.getContext('2d');
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
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();

    // ctx.beginPath();
    // ctx.moveTo(300, 300);
    // // ctx.lineTo(300+200*Math.cos(Math.PI/2 - degMin*(Math.PI/180)), 300 - 200*Math.sin(Math.PI/2 - degMin*(Math.PI/180)));
    // ctx.lineTo(300, 70);
    // ctx.stroke();
    // ctx.closePath();

    // ctx.beginPath();
    // ctx.moveTo(300, 300);
    // // ctx.lineTo(300 + 150*Math.cos(Math.PI/2 - degHour*(Math.PI/180)), 300 - 150*Math.sin(Math.PI/2 - degHour*(Math.PI/180)));
    // ctx.lineTo(300, 100);
    // ctx.stroke();
    // ctx.closePath();
};

let man = new Clock();
let view = new ClockViewCanvas();
let controller = new ManControllerButtons();

man.init(view);
view.init(man, createClockCanvas);
controller.init(man);

let man2 = new Clock();
let view2 = new ClockViewCanvas();
let controller2 = new ManControllerButtons();

man2.init(view2);
view2.init(man2, createClockCanvas);
controller2.init(man2);



