const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
console.log(step)


function createPromise(position, delay) {
  
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill

  } else {
    // Reject
   
  }
}

form.addEventListener('submit',createPromise)