const countDownDate = new Date("Jun 5, 2023 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = Math.abs(countDownDate - now);

    const secondsInDay = 1000 * 60 * 60 * 24;
    const secondsInHour = 1000 * 60 * 60;
    const secondsInMinute = 1000 * 60;

    const days = Math.floor(distance / secondsInDay);
    const hours = Math.floor((distance % secondsInDay) / secondsInHour);
    const minutes = Math.floor((distance % secondsInHour) / secondsInMinute);
    const seconds = Math.floor((distance % secondsInMinute) / 1000);

    const prefix = (countDownDate - now) < 0 ? "-" : "";

    document.getElementById("countdown").innerHTML = prefix + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
}

updateCountdown();
setInterval(updateCountdown, 1000);
