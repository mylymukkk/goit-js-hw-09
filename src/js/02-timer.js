import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - Date.now() < 0) {
      Notiflix.Notify.failure('Please, choose a date in the future');
      btn.setAttribute('disabled', 'disabled');
      return;
    }

    btn.removeAttribute('disabled');
    btn.addEventListener('click', onStart);
  },
};

const calendar = flatpickr(input, options);
btn.setAttribute('disabled', 'disabled');

function onStart() {
  const timer = setInterval(() => {
    const remainder = calendar.selectedDates[0] - Date.now();
    if (remainder <= 0) {
      clearInterval(timer);
      Notiflix.Notify.info('Time is up!');
      return;
    }
    updateTime(convertMs(remainder));
  }, 1000);
}

function updateTime(date) {
  const { days, hours, minutes, seconds } = date;
  day.textContent = addLeadingZero(days);
  hour.textContent = addLeadingZero(hours);
  minute.textContent = addLeadingZero(minutes);
  second.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
