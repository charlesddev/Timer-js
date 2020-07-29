const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let setTime = document.getElementById("time").innerHTML;
setTime = parseFloat(setTime);

function timeUp() {
        setTime.toFixed(2);
        setTime += 0.01;
        console.log(setTime);
}

startButton.onclick = function startTimer() {
    window.setInterval(timeUp, 10)
}

stopButton.onclick = function stopTimer() {
    clearInterval(timeUp);
}