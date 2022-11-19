let seconds = 0;
let minutes = 0;

const minuteCountdownBereich = document.querySelector("#minuteCountdownBereich");
let outputElement = document.querySelector("#time");

let interval1;

function startMinCountdown() {
    let input = document.querySelector("#minutes");
    if (!Number(input.value)) {
        return;
    }
    minutes = Number(input.value) - 1;
    seconds = 60;
    outputElement.innerHTML = `0${minutes}:${seconds}`;
    interval();
}
function interval() {
    if (minutes > 0 || seconds > 0) {
        interval1 = setInterval(countdown, 10);
    }
}

function pauseMinCountdown() {
    clearInterval(interval1);
};
function restartMinCountdown() {
    interval();
};

function countdown() {
    seconds = seconds - 1;
    console.log({ minutes, seconds });
    outputElement.innerHTML = `0${minutes}:${seconds}`;

    if (minutes == 0 && seconds == 0) {
        clearInterval(interval1);
    } else if (seconds == 0) {
        seconds = 59;
        minutes--;
    }
}

