const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function showTime() {
    let currentDate = new Date();
    let hr = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();

    HOURHAND.style.transform = `rotate(${hr*360/12 + min*(360/60)/12}deg)`;
    MINUTEHAND.style.transform = `rotate(${min*360/60 + sec*360/3600}deg)`;
    SECONDHAND.style.transform = `rotate(${sec*360/60}deg)`;
}

setInterval(showTime, 1000);
