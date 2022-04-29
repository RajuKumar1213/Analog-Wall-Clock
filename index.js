setInterval(() => {
    
let date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let hRotation = 30 * currentHour + currentMinute/2;
let mRotatioin = 6 * currentMinute;
let sRotation = 6 * currentSecond;

hour.style.transform = `rotate(${hRotation}deg)`;
minute.style.transform =  `rotate(${mRotatioin}deg)`;
second.style.transform = `rotate(${sRotation}deg)`;

}, 1000);

