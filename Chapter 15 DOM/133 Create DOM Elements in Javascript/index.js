// Create DOM Elements in Javascript

let li = document.createElement("li");
li.className = "list-group-item";
li.title = "four item";
li.innerHTML = "Four";

let child = document.getElementById("list");
child.appendChild(li);

let myDiv = createElement("div");

let list = createElement(
  "p",
  "lead",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorem ipsum commodi exercitationem illum consequatur repudiandae voluptatum porro, deserunt dicta provident eligendi quae inventore quis harum iure tempora dolor odio?"
);

let listItem = document.getElementById("listItem");

appendChil(listItem, myDiv);

appendChil(myDiv, list);
function createElement(tagName, classname, inner) {
  let tagname = document.createElement(tagName);
  tagname.className = classname || "";
  tagname.innerHTML = inner || "";
  return tagname;
}

function appendChil(parent, child) {
  return parent.appendChild(child);
}
