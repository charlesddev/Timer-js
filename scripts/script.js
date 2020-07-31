const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let setCentiSeconds = parseInt(document.getElementById("centiseconds").innerHTML);
let setSeconds = parseInt(document.getElementById("seconds").innerHTML);
let setMinutes = parseInt(document.getElementById("minutes").innerHTML);
let setHours = parseInt(document.getElementById("hours").innerHTML);
let clear;

setSeconds = 55;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

stopButton.style.display = "none";
resetButton.style.display = "none";

function fakeCentiSecs() {
    setCentiSeconds++;
    if (setCentiSeconds < 10) {
        document.getElementById("centiseconds").innerHTML = setCentiSeconds;
    } else {
        setCentiSeconds = 0;
    }
}

function myTimer() {

    setSeconds++;
    if (setSeconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + setSeconds;
    } else {
        document.getElementById("seconds").innerHTML = setSeconds;
    }

    if (setSeconds == 60) {
        setSeconds = "0" + 0;
        setMinutes++;
        if (setMinutes < 10) {
            document.getElementById("minutes").innerHTML = "0" + setMinutes;
        } else {
            document.getElementById("minutes").innerHTML = setMinutes;
        }
    }

    if (setMinutes == 60) {
        setMinutes = "0" + 0;
        setHours++;
        if (setHours < 10) {
            document.getElementById("hours").innerHTML = "0" + setHours;
        } else {
            document.getElementById("hours").innerHTML = setHours;
        }
    }
}

function startTimer() {
    clear = setInterval(myTimer, 1000)
    clearCentiSecs = setInterval(fakeCentiSecs, 100)
    startButton.style.display = "none";
    stopButton.style.display = "initial";
    resetButton.style.display = "initial";
}

function stopTimer() {
    clearInterval(clear);
    clearInterval(clearCentiSecs);
    startButton.style.display = "initial";
    stopButton.style.display = "none";
}

function resetTimer() {
    clearInterval(clear);
    clearInterval(clearCentiSecs);
    setCentiSeconds = 0;
    setSeconds = 0;
    setMinutes = 0;
    setHours = 0;
    document.getElementById("centiseconds").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    startButton.style.display = "initial";
    stopButton.style.display = "none";
    resetButton.style.display = "none";
}
