const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  startBtn.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled');

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    console.log('nfdfn');
  }, 1000);
}

function onStopBtn() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'disabled');
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
