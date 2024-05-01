// How to Loop Throw HTML Collections in Javascript

// let list = document.querySelectorAll("li");
// console.log(list);

// list.forEach((e, ind) => {
//   let text = e.innerText;
//   e.innerText = `${ind + 1} ${text}`;
// });

let listItem = document.getElementsByTagName("li");

// let listItems = Array.from(listItem);
// let listItems = Array.prototype.slice.apply(listItem);
let listItems = [...listItem];

listItems.forEach((li, ind) => {
  let text = li.innerHTML;
  li.innerHTML = `(${ind + 1}) ${text}`;
});
