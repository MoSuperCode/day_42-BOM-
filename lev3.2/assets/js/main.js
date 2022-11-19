let seconds = 0;
let minutes = 0;

const minuteCountdownBereich = document.querySelector("#minuteCountdownBereich");
let outputElement = document.querySelector("#time");

let countDownInterval;

function startCountdown() {
    let countdownOngoing = minutes > 0 || seconds > 0;
    if (countdownOngoing) {
        clearInterval(countDownInterval);
        countDownInterval = setInterval(countdown, 1000); +    console.log("after clearing:", { countDownInterval });
    }
}
function countdown() {
    seconds = seconds - 1;
    console.log({ minutes, seconds });
    outputElement.innerHTML = `0${minutes}:${seconds}`;

    if (minutes == 0 && seconds == 0) {
        clearInterval(countDownInterval);
    } else if (seconds == 0) {
        seconds = 59;
        minutes--;
    }
}

// OnClicks:

function startMinCountdown() {
    let input = document.querySelector("#minutes");
    if (!Number(input.value)) {
        return;
    }
    minutes = Number(input.value) - 1;
    seconds = 60;
    outputElement.innerHTML = `0${minutes}:${seconds}`;
    startCountdown();
}

function pauseMinCountdown() {
    clearInterval(countDownInterval);
}

function restartMinCountdown() {
    startCountdown();
}

