window.addEventListener("DOMContentLoaded", () => {
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");

  const hour = new Date().getHours() % 12;
  const minute = new Date().getMinutes();

  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
});
