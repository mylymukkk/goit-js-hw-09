import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let totalDelay = Number(delay.value);

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, totalDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    totalDelay += Number(step.value);
  }

  event.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolved, rejected) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolved({ position, delay });
      } else {
        rejected({ position, delay });
      }
    }, delay);
  });
  return promise;
}
