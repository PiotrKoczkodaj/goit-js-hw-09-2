import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerItem = document.querySelector('.timer');
let timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');


timerItem.style.display = 'flex';
timerItem.style.justifyContent = 'space-evenly';
timerItem.style.width = '24%';
timerItem.style.marginLeft = '-16px';

startBtn.disabled = true;

        function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


let timer;

flatpickr(input,

    {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
        onClose(selectedDates) {

        let selectedDatesMs = selectedDates[0].getTime();
        let actualDateMs = new Date().getTime();
            
            if (selectedDatesMs < actualDateMs) {
                window.alert("Please choose a date in the future")
            } else {
                startBtn.disabled = false;
                let calculateMS = selectedDatesMs - actualDateMs;
                const startBtnOnClick = () => { 
                    console.log(convertMs(calculateMS)); 
                    timerDays.textContent = convertMs(calculateMS).days;
                    timerHours.textContent = convertMs(calculateMS).hours;
                    timerMinutes.textContent = convertMs(calculateMS).minutes;
                    timerSeconds.textContent = convertMs(calculateMS).seconds;


                    timer = setInterval(() => {
                        timerSeconds.textContent--;
                        if (timerSeconds.textContent === '0') {
                            timerMinutes.textContent--;
                            timerSeconds.textContent = 59;
                            
                        }
                        if (timerMinutes.textContent === '0') {
                            timerHours.textContent--;
                            timerMinutes.textContent = 59;
                            
                        }
                        if (timerHours.textContent === '0') {
                            timerDays.textContent--;
                            timerHours.textContent = 23;
                        }
                        if (timerDays.textContent === '0' & timerHours==='0' & timerMinutes==='0' & timerSeconds=== '0') {
                            clearInterval(timer)
                        }
                    
                    },100)
                }

                startBtn.addEventListener('click',startBtnOnClick);
               
            };   
  },
    }
);

