//  GetElemetns Method vs Query Selector in Javascript

let list = document.getElementsByTagName("li"); //elements => control directly

console.log(list);
console.log(list.constructor.name);

let listItem = document.querySelectorAll("li"); //nodes element

console.log(listItem);
console.log(listItem.constructor.name);

let ul = document.querySelector("ul");

console.log(ul);
console.log(ul.children);
console.log(ul.childNodes);
