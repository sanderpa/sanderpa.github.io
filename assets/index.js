let countDownDate = new Date("Oct 1, 2021 12:00:00").getTime();

let countDownFunction = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hourse = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000)

    document.getElementById("timer").innerHTML = days + " Дн  " + hourse + " Год  " + minutes + " Хв  " + seconds + " Cек";

    if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("timer").innerHTML = "Ми одружилися :)"
    }

}, 1000)
