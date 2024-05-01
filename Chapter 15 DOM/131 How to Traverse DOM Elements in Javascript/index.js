// How to Traverse DOM Elements in Javascript

let list = document.getElementById("list");

console.log(list);

let child = list.children;
console.log(child);
let parent = list.parentElement;
console.log(parent);

console.log(list.nextSibling);
console.log(list.nextElementSibling);
console.log(list.previousElementSibling);

let li = document.querySelector("li");
console.log(li.nextElementSibling);
console.log(li.previousElementSibling);

console.log(list.firstElementChild);
console.log(list.lastElementChild);
