let timer;
let isRunning = false;
let elapsedTime = 0;
let lapCount = 0;

const timeDisplay = document.getElementById('timeDisplay');
const lapTimes = document.getElementById('lapTimes');

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('lapBtn').addEventListener('click', recordLap);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            elapsedTime += 1000;
            updateTimeDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateTimeDisplay();
    lapTimes.innerHTML = ''; // Clear lap times
    lapCount = 0; // Reset lap count
}

function recordLap() {
    if (elapsedTime > 0) {
        lapCount++;
        const lapTime = document.createElement('div');
        lapTime.textContent = `Lap ${lapCount}: ${formatTime(elapsedTime)}`;
        lapTimes.appendChild(lapTime);
    }
}

function updateTimeDisplay() {
    timeDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
