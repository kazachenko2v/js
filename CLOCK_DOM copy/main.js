let svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
document.body.append(svg);

function createCircle(){
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
}

function createNumbers(){
    let g = document.createElementNS('http://www.w3.org/2000/svg','g');
    svg.append(g);
    g.setAttribute('x', '300%');
    g.setAttribute('y', '50');
    let circle = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    g.append(circle);
    circle.setAttribute('cx', '300');
    circle.setAttribute('cy', '50');
    circle.setAttribute('r', '15');
    circle.setAttribute('fill', 'red');
    circle.setAttribute('stroke', 'orange');
}

function createSecondHand(){
    let line = document.createElementNS('http://www.w3.org/2000/svg','line');
    svg.append(line);
    line.classList.add('second');
    line.setAttribute('x1', '300');
    line.setAttribute('y1', '300');
    line.setAttribute('x2', '300');
    line.setAttribute('y2', '70');
    line.setAttribute('stroke', 'black');
    line.setAttribute('transform-origin', '50% 50%');
    let secondLine = document.querySelector('.second');
    return secondLine;
}

function createMinuteHand(){
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
}

function createHourHand(){
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
}

// let secondLine = document.querySelector('.second');
// let minuteLine = document.querySelector('.minute');
// let hourLine = document.querySelector('.hour');
// let time = document.querySelector('.time');

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
    
    // let secondLine = document.querySelector('.second');
    // let minuteLine = document.querySelector('.minute');
    // let hourLine = document.querySelector('.hour');
    // let time = document.querySelector('.time');

    let qwe = function(q){
        if (q<10) { q = '0' + q }
        return q;
    }

    vremy.innerHTML = qwe(hours) + ':' + qwe(minutes) + ':' + qwe(seconds);
    // let degSec = 6 * seconds;
    // let degMin = 6 * minutes;
    // let degHour = 15 * hours;
    
    

    // asd.style.transform = "rotate(" + degSec + "deg)";
    // asd2.style.transform = "rotate(" + degMin + "deg)";
    // asd3.style.transform = "rotate(" + degHour + "deg)";
    sec.style.transform = `rotate(${6 * seconds}deg)`;
    min.style.transform = `rotate(${6 * minutes}deg)`;
    h.style.transform = `rotate(${15 * hours}deg)`;

    if (hours>12){
        // degHour = 30 * hours;
        h.style.transform = `rotate(${30 * hours}deg)`;
    }
}


setInterval(showTime, 1000);
