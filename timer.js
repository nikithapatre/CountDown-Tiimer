const totalDays = document.getElementById("days");
const totalHours = document.getElementById("hours");
const totalMinutes = document.getElementById("minutes");
const totalSeconds = document.getElementById("seconds")

function countDown() {
    const currentDate = new Date();
    const endDate = new Date(2021, 08, 30, 23, 59);

const diff = (endDate - currentDate);
const seconds = Math.floor((diff / 1000) % 60) ;
const minutes = Math.floor((diff / 1000 / 60) % 60);
const hours  = Math.floor( (diff/ (1000*60*60)) % 24); 
const days = Math.floor( diff/ (1000*60*60*24));


 totalDays.innerHTML = days;
 totalHours.innerHTML =format(hours);
 totalMinutes.innerHTML =format (minutes) ;
 totalSeconds.innerHTML = format(seconds);
}

function format(time) {
    if (time < 10 ) {
        return "0" + time;
    } else {
        return time;
    }
}

countDown();

setInterval(countDown, 1000);


// 