const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const YEARS = (() => {
  start = 1900;
  end = 2050;

  const years = [];
  for (let i = start; i <= end; i++) {
    years.push(i);
  }
  return years;
})();

const generateSelectOptions = (options) => {
  return options?.map((item) => `<option>${item}</option>`).join();
};

const onChange = () => {
  currentYear = year_dropdown.value;
  currentMonth = MONTHS.indexOf(month_dropdown.value);
  generateCalendar(currentMonth, currentYear);
};

const actions_div = document.createElement("div");

// dropdowns section
const dropdowns_div = document.createElement("div");

// create dropdown to select month
const month_dropdown = document.createElement("select");
month_dropdown.innerHTML = generateSelectOptions(MONTHS);
month_dropdown.addEventListener("change", onChange);

// create dropdown to select year
const year_dropdown = document.createElement("select");
year_dropdown.innerHTML = generateSelectOptions(YEARS);
year_dropdown.addEventListener("change", onChange);

dropdowns_div.append(month_dropdown);
dropdowns_div.append(year_dropdown);
dropdowns_div.classList.add("div_wraper");

actions_div.append(dropdowns_div);
actions_div.classList.add("div_wraper");
actions_div.style.gap = "100px";

// actions sections
const previous = () => {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  generateCalendar(currentMonth, currentYear);
};

const next = () => {
  currentYear = currentMonth === 11 ? +currentYear + 1 : currentYear;
  currentMonth = currentMonth === 11 ? 0 : +currentMonth + 1;
  generateCalendar(currentMonth, currentYear);
};

// buttons section
const buttons_div = document.createElement("div");

// create previous button
const prev_btn = document.createElement("button");
prev_btn.innerHTML = "Previous";
prev_btn.addEventListener("click", previous);

// create next button
const next_btn = document.createElement("button");
next_btn.innerHTML = "Next";
next_btn.addEventListener("click", next);

buttons_div.append(prev_btn);
buttons_div.append(next_btn);
// insect css design with class name
buttons_div.classList.add("div_wraper");

actions_div.append(buttons_div);

// insect action section in to container div
const container_div = document.querySelector(".container");
container_div.append(actions_div);

// function for generate calendar
const generateCalendar = (month, year) => {
  const table = document.createElement("table");
  const table_head = document.createElement("thead");
  const table_body = document.createElement("tbody");

  // create table header dynamically
  table_head.innerHTML = `<tr>${DAYS.map((day) => `<th>${day}</th>`).join(
    ""
  )}</tr>`;

  // sync with dropdown select value
  month_dropdown.value = MONTHS[month];
  year_dropdown.value = year;

  const first_day = new Date(year, month).getDay();
  const days_in_month = 32 - new Date(year, month, 32).getDate();

  let day = 1;
  // generate month days
  for (let row = 0; row < 6; row++) {
    const table_row = document.createElement("tr");
    for (let col = 0; col < 7; col++) {
      if (row === 0 && first_day > col) {
        const cell = document.createElement("td");
        cell.innerText = "";
        table_row.append(cell);
      } else if (day > days_in_month) break;
      else {
        const cell = document.createElement("td");
        cell.innerText = day;
        table_row.append(cell);
        day++;
      }
    }
    table_body.append(table_row);
  }

  table.append(table_head);
  table.append(table_body);

  const table_area = document.getElementById("table-area");
  table_area.innerHTML = "";
  table_area.append(table);

  // title -> sync with current month and year value
  const title = document.getElementById("title");
  title.innerHTML = `${MONTHS[month]} ${year}`;
};

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
// default call with current month and year value
generateCalendar(currentMonth, currentYear);
