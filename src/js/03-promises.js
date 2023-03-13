const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]').value;
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
console.log(delay)


function createPromise(position,delay) {
  
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {

       setInterval(() => {
  if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${obj.position} in ${obj.delay}ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`)
  }

  },delay)

  }).then(resolve => {
    console.log(resolve)
  }).then(reject => {
    console.log(reject)
  })
}

// form.addEventListener('click',createPromise)
createPromise(1,1000)