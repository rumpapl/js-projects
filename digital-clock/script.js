// Defining showTime funcion
function showTime() {
  // Getting current time and date
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  // Setting time for 12 Hrs format
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  const hour_span = document.createElement("span");
  hour_span.innerHTML = hour;
  hour_span.classList.add("hour");

  const mins_span = document.createElement("span");
  mins_span.innerHTML = min;
  mins_span.classList.add("mins");

  const sec_span = document.createElement("span");
  sec_span.innerHTML = sec;
  sec_span.classList.add("sec");

  // Displaying the time
  const clock = document.getElementById("clock");
  clock.innerHTML = "";
  clock.append(hour_span);
  clock.append(" : ");
  clock.append(mins_span);
  clock.append(" : ");
  clock.append(sec_span);
  clock.append(" ");
  clock.append(am_pm);
}

showTime();

let clock_id;
const handleStart = () => {
  if (!clock_id) {
    clock_id = setInterval(showTime, 1000);
  }
};

const handleStop = () => {
  clearInterval(clock_id);
  clock_id = null;
};

const start_btn = document.querySelector("#start-btn");
start_btn.addEventListener("click", handleStart);

const stop_btn = document.querySelector("#stop-btn");
stop_btn.addEventListener("click", handleStop);
