let svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
document.body.append(svg);

function createClock(){
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
    // let time = document.querySelector('.time');
    // return time;

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

    let line = document.createElementNS('http://www.w3.org/2000/svg','line');
    svg.append(line);
    line.classList.add('second');
    line.setAttribute('transform-origin', '50% 50%');
    line.setAttribute('x1', '300');
    line.setAttribute('y1', '300');
    // line.setAttribute('x2', '300');
    // line.setAttribute('y2', '70');
    line.setAttribute('stroke', 'black');
    // let secondLine = document.querySelector('.second');
    // return secondLine;

    let line = document.createElementNS('http://www.w3.org/2000/svg','line');
    svg.append(line);
    line.classList.add('minute');
    line.setAttribute('x1', '300');
    line.setAttribute('y1', '300');
    line.setAttribute('x2', '300');
    line.setAttribute('y2', '100');
    line.setAttribute('stroke', 'black');
    line.setAttribute('transform-origin', '50% 50%');
    // let minuteLine = document.querySelector('.minute');
    // return minuteLine;

    let line = document.createElementNS('http://www.w3.org/2000/svg','line');
    svg.append(line);
    line.classList.add('hour');
    line.setAttribute('x1', '300');
    line.setAttribute('y1', '300');
    line.setAttribute('x2', '300');
    line.setAttribute('y2', '150');
    line.setAttribute('stroke', 'black');
    line.setAttribute('transform-origin', '50% 50%');
    // let hourLine = document.querySelector('.hour');
    // return hourLine;
};

let createCircle = function(){
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
    let time = document.querySelector('.time');
    return time;
};

let createNumbers = function(){
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
};

let createSecondHand = function(){
    let line = document.createElementNS('http://www.w3.org/2000/svg','line');
    svg.append(line);
    line.classList.add('second');
    line.setAttribute('transform-origin', '50% 50%');
    line.setAttribute('x1', '300');
    line.setAttribute('y1', '300');
    // line.setAttribute('x2', '300');
    // line.setAttribute('y2', '70');
    line.setAttribute('stroke', 'black');
    let secondLine = document.querySelector('.second');
    return secondLine;
};

let createMinuteHand = function(){
    let line = document.createElementNS('http://www.w3.org/2000/svg','line');
    svg.append(line);
    line.classList.add('minute');
    line.setAttribute('x1', '300');
    line.setAttribute('y1', '300');
    line.setAttribute('x2', '300');
    line.setAttribute('y2', '100');
    line.setAttribute('stroke', 'black');
    line.setAttribute('transform-origin', '50% 50%');
    let minuteLine = document.querySelector('.minute');
    return minuteLine;
};

let createHourHand = function(){
    let line = document.createElementNS('http://www.w3.org/2000/svg','line');
    svg.append(line);
    line.classList.add('hour');
    line.setAttribute('x1', '300');
    line.setAttribute('y1', '300');
    line.setAttribute('x2', '300');
    line.setAttribute('y2', '150');
    line.setAttribute('stroke', 'black');
    line.setAttribute('transform-origin', '50% 50%');
    let hourLine = document.querySelector('.hour');
    return hourLine;
};

// function qwe(){
//     let sec = createSecondHand();
//     sec.setAttribute('x2', `120`);
//     sec.setAttribute('y2', `20`);
// }

// qwe()

function showTime(){
    let vremy = createCircle();
    let sec = createSecondHand();
    let min = createMinuteHand();
    let h = createHourHand();
    createNumbers()

    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let addZero = function(q){
        if (q<10) { q = '0' + q }
        return q;
    }

    vremy.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
    
    for (let i = 12; i > 0; i--){
        
        // sec.setAttribute('x2', `${300+(280 * Math.cos(-30*i*(Math.PI/180) + Math.PI/2))}`);
        sec.setAttribute('x2', `${300 + 270*Math.cos(Math.PI/2 - (seconds*6)*(Math.PI/180))}`);
        // sec.setAttribute('y2', `${300-(280 * Math.sin(-30*i*(Math.PI/180) + Math.PI/2))}`);
        sec.setAttribute('y2', `${300 - 270*Math.sin(Math.PI/2 - (seconds*6)*(Math.PI/180))}`);
    }


    // sec.style.transform = `rotate(${6 * seconds}deg)`;
    // min.style.transform = `rotate(${6 * minutes}deg)`;
    // h.style.transform = `rotate(${15 * hours}deg)`;

    if (hours>12){
        h.style.transform = `rotate(${30 * hours}deg)`;
    }
}


setInterval(showTime, 1000);
