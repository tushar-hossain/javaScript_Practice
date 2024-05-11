// Create a Clock

function setTime() {
  let times = document.getElementById("times");

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = timesFormate(hours);
  minutes = timesFormate(minutes);
  seconds = timesFormate(seconds);

  let time = hours + ":" + minutes + ":" + seconds;
  times.innerHTML = time;
}

setInterval(setTime, 1000);

function timesFormate(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
