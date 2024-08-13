let seconds = 0;
let intervalId = null;

const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const updateTimerDisplay = () => {
    timerDisplay.textContent = formatTime(seconds);
};

const startTimer = () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            seconds++;
            updateTimerDisplay();
        }, 1000);
    }
};

const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
};

const resetTimer = () => {
    stopTimer();
    seconds = 0;
    updateTimerDisplay();
};

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateTimerDisplay();
