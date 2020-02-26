let secondLine = document.querySelector('.second');
let minuteLine = document.querySelector('.minute');
let hourLine = document.querySelector('.hour');
let time = document.querySelector('.time');

function showTime(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    
    let qwe = function(q){
        if (q<10) { q = '0' + q }
        return q;
    }

    time.innerHTML = qwe(hours) + ':' + qwe(minutes) + ':' + qwe(seconds);
    let degSec = 6 * seconds;
    let degMin = 6 * minutes;
    let degHour = 15 * hours;
    
    if (hours>12){
        degHour = 30 * hours;
    }
    secondLine.style.transform = "rotate(" + degSec + "deg)";
    minuteLine.style.transform = "rotate(" + degMin + "deg)";
    hourLine.style.transform = "rotate(" + degHour + "deg)";
}



setInterval(showTime, 1000);
