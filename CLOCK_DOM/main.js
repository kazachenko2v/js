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
circle.setAttribute('fill', 'yellow');
let text = document.createElementNS("http://www.w3.org/2000/svg",'text');
svg.append(text);
text.classList.add('time');
text.setAttribute('x', '50%');
text.setAttribute('y', '100');
text.setAttribute('text-anchor', 'middle');
text.setAttribute('font-size', '25');



let g = document.createElementNS('http://www.w3.org/2000/svg','g');
svg.append(g);
g.setAttribute('x', '300%');
g.setAttribute('y', '50');
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


let line1 = document.createElementNS('http://www.w3.org/2000/svg','line');
svg.append(line1);
line1.classList.add('second');
line1.setAttribute('x1', '300');
line1.setAttribute('y1', '300');
line1.setAttribute('x2', '300');
line1.setAttribute('y2', '70');
line1.setAttribute('stroke', 'black');
line1.setAttribute('transform-origin', '50% 50%');

let line2 = document.createElementNS('http://www.w3.org/2000/svg','line');
svg.append(line2);
line2.classList.add('minute');
line2.setAttribute('x1', '300');
line2.setAttribute('y1', '300');
line2.setAttribute('x2', '300');
line2.setAttribute('y2', '100');
line2.setAttribute('stroke', 'black');
line2.setAttribute('transform-origin', '50% 50%');

let line3 = document.createElementNS('http://www.w3.org/2000/svg','line');
svg.append(line3);
line3.classList.add('hour');
line3.setAttribute('x1', '300');
line3.setAttribute('y1', '300');
line3.setAttribute('x2', '300');
line3.setAttribute('y2', '150');
line3.setAttribute('stroke', 'black');
line3.setAttribute('transform-origin', '50% 50%');


let secondLine = document.querySelector('.second');
let minuteLine = document.querySelector('.minute');
let hourLine = document.querySelector('.hour');
let time = document.querySelector('.time');

function showTime(){

    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let addZero = function(q){
        if (q<10) { q = '0' + q }
        return q;
    }

    time.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);

    secondLine.style.transform = `rotate(${6 * seconds}deg)`;
    minuteLine.style.transform = `rotate(${6 * (minutes + (1/60)*seconds)}deg`;

    if (hours>=12){
        hourLine.style.transform = `rotate(${15 * (hours + (1/60)*minutes)}deg)`;
    } else {
        hourLine.style.transform = `rotate(${30 * (hours + (1/60)*minutes)}deg)`;
    }
}


setInterval(showTime, 1000);
