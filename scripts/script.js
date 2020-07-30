const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
let setTime = document.getElementById("time").innerHTML;
let setTimeFixed;
let clear;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

stopButton.style.display = "none";
resetButton.style.display = "none";


function myTimer() {
    setTime = parseFloat(setTime);
    setTime += 0.1;
    setTimeFixed = setTime.toFixed(1);
    document.getElementById("time").innerHTML = setTimeFixed;
}

function startTimer() {
    clear = setInterval(myTimer, 100)
    startButton.style.display = "none";
    stopButton.style.display = "initial";
    resetButton.style.display = "initial";
}

function stopTimer() {
    clearInterval(clear);
    startButton.style.display = "initial";
    stopButton.style.display = "none";
}

function resetTimer() {
    clearInterval(clear);
    setTime = 0;
    document.getElementById("time").innerHTML = setTime;
    startButton.style.display = "initial";
    stopButton.style.display = "none";
    resetButton.style.display = "none";
}
