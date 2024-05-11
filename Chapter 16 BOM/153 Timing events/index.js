// Timing events
// setTimeout, setInterval

let saveButton = document.getElementById("saveButton");

let message = document.getElementById("message");

saveButton.addEventListener("click", function (e) {
  message.innerHTML = "User Registration Successfull";

  setTimeout(() => {
    // message.remove();
    message.innerHTML = "";
  }, 3000);
});

let countbtn = document.getElementById("count");

countbtn.addEventListener("click", function (e) {
  let count = 1;
  message.innerHTML = count;

  setInterval(() => {
    count++;
    message.innerHTML = count;
  }, 1000);
});
