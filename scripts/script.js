const startButton = document.getElementById("startButton");
let setTime = document.getElementById("time").value;

console.log(setTime);

function timeUp() {
    setTime += 0.01;
}

startButton.onclick = function startTimer() {
    window.setInterval(timeUp, )
}