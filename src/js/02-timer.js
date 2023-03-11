import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

startBtn.disabled = true;

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
                startBtn.disabled = false
            }
            console.log(selectedDatesMs-actualDateMs);   
  },
    }
);


const increment = () => {
    
}
startBtn.addEventListener('click',increment)
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
   console.log(convertMs(1724394802))