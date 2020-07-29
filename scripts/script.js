const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
let setTime = document.getElementById("time").innerHTML;
let setTimeFixed;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
setTime = parseFloat(setTime);



function myTimer() {
    setTime += 0.1;
    setTimeFixed = setTime.toFixed(1);
    document.getElementById("time").innerHTML = setTimeFixed;
}

function startTimer() {
    setInterval(myTimer, 100)
    document.getElementById("startButton").style.visibility = "hidden";
}

function stopTimer() {
   clearInterval(setTime);
   document.getElementById("startButton").style.visibility = "initial";
}

function resetTimer() {
    clearInterval(setTime);
    setTime = 0;
    document.getElementById("time").innerHTML = setTime;
}
