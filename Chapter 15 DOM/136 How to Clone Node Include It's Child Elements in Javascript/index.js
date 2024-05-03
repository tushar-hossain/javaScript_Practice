// How to Clone Node Include It's Child Elements in Javascript

let list = document.getElementById("list");

let lastItem = list.lastElementChild;

let lastChild = lastItem.cloneNode(true);
setTimeout(() => {
  lastChild.innerHTML = "Four";
  list.appendChild(lastChild);
}, 3000);
