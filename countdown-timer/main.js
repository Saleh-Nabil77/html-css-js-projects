let countDownDate = new Date("Dec 31, 2026 23:59:59").getTime();

function updateTimer() {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    // When the date has passed, show zeros and stop the timer
    if (dateDiff < 0) {
        dateDiff = 0;
        clearInterval(counter);
    }

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
}

let counter = setInterval(updateTimer, 1000);
updateTimer(); // show the numbers immediately instead of waiting one second
