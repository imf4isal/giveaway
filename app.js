const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const futureDate = new Date(2022, 0, 1, 10, 20);

const deadlineYear = futureDate.getFullYear();
const deadlineMonth = months[futureDate.getMonth()];
const deadlineDate = futureDate.getDate();
const deadlineDay = weekdays[futureDate.getDay()];

const deadlineHour = futureDate.getHours();
const deadlineMin = futureDate.getMinutes();

giveaway.textContent = `Give aways ends On ${deadlineDay} ${deadlineMonth} ${deadlineDate}, ${deadlineYear} ${deadlineHour}:${deadlineMin}am`;

function getRemainderTime() {
  const currDate = new Date();
  const currTime = currDate.getTime();

  const futureTime = futureDate.getTime();

  const remainderTime = futureTime - currTime;
  const oneSec = 1 * 1000;
  const oneMin = 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;
  const rDay = Math.floor(remainderTime / oneDay);
  const rHour = Math.floor((remainderTime % oneDay) / oneHour);
  const rMin = Math.floor((remainderTime % oneHour) / oneMin);
  const rSec = Math.floor((remainderTime % oneMin) / oneSec);

  const values = [rDay, rHour, rMin, rSec];

  function format(value) {
    if (value < 10) return `0${value}`;
    return value;
  }

  items.forEach((item, i) => {
    item.textContent = format(values[i]);
  });
}

let count = setInterval(getRemainderTime, 1000);
getRemainderTime();
