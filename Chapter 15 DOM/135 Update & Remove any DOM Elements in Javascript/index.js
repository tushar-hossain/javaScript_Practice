// Update & Remove any DOM Elements in Javascript

let lead = document.getElementById("lead");

setTimeout(() => {
  lead.firstElementChild.innerHTML = lead.firstElementChild.innerHTML + " (modyfied)";

  lead.lastElementChild.innerHTML = lead.lastElementChild.innerHTML + " (modyfied)";
}, 3000);

setTimeout(() => {
  lead.lastElementChild.remove();
}, 5000);

let a = lead.firstElementChild;

setTimeout(() => {
  a.nextElementSibling.remove();
}, 6000);
