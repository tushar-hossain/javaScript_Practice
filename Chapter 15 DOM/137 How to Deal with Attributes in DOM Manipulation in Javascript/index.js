// How to Deal with Attributes in DOM Manipulation in Javascript

let listItem = document.getElementById("list");

let lastchild = listItem.lastElementChild;

let lastList = lastchild.cloneNode();
lastList.innerHTML = "Four";
listItem.appendChild(lastList);

// console.log(lastList.attributes);
// console.log(lastList.getAttribute('class'));
// console.log(listItem.getAttributeNode("id"));

// console.log(listItem.getAttribute('class'));

let attr = document.createAttribute("title");
attr.value = "I am title";

lastList.setAttributeNode(attr);
