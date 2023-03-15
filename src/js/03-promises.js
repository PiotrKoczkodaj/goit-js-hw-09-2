const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]').value;
const amountInput = document.querySelector('input[name="amount"]');
const btn = document.querySelector('button[type="submit"]');



function createPromise(e,position,delay) {
  e.preventDefault();
  delay = delayInput.value;
  amount = amountInput.value;

  let interval = setInterval(() => {
    const shouldResolve = Math.random() > 0.3;
    
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`)
    }
  });

    promise.then(({ position, delay }) => {

      const positionRendering = () => {
        
        for (let i = 1; i<=amount; i++) {
          return i
        }
      };

    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }).catch(({position,delay}) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

},delay)
  }

form.addEventListener('submit',createPromise)

// setInterval(() => {
// const isSuccess = Math.random() > 0.3;
// const promise = new Promise((resolve, reject) => {
  
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   });


// promise.then(
//   // onResolve will run third or not at all
//   value => {
    
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
    
//     console.log(error); // "Error! Error passed to reject function"
//   }
// )},1000);