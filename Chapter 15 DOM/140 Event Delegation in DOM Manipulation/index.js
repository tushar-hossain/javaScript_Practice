// Event Delegation in DOM Manipulation

let list = document.getElementById("list");

let btnOne = document.getElementById("btn");

let btnTwo = document.getElementById("btn2");

btnOne.addEventListener("click", function (e) {
  let item = list.lastElementChild.cloneNode(true);
  item.innerHTML = "Newly created Elements";
  list.appendChild(item);
});

btnTwo.addEventListener("click", function (e) {
  if (list.lastElementChild) {
    list.lastElementChild.remove();
  } else {
    let item = list.lastElementChild.cloneNode(true);
    item.innerHTML = "Newly created Elements";
    list.appendChild(item);
  }
});

list.addEventListener("click", function (e) {
  // e.target.remove();
  if (this.contains(e.target)) {
    e.target.remove();
  }
});
