const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
  const currentHour = new Date().getHours();
  const hourDeg = (currentHour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;

  const currentMinute = new Date().getMinutes();
  const minuteDeg = (currentMinute / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

  const currentSecond = new Date().getSeconds();
  const secondDeg = (currentSecond / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
