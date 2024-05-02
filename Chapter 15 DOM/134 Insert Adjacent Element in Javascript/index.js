// Insert Adjacent Element in Javascript

let li = document.createElement("li");
li.className = "list-group-item";
li.title = "I am four";
li.innerHTML = "Four";

let list = document.getElementsByTagName("ul")[0];
list.appendChild(li);

let li2 = createElement("li", "list-group-item", "Five");
appendChild(list, li2);

let paragraph = createElement(
  "p",
  "lead",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, odit ullam ab, autem, quasi quis et nulla culpa veniam cumque quod optio cupiditate aliquam mollitia. Ut similique provident ullam dolor."
);

let myDiv = createElement("div");
appendChild(myDiv, paragraph);

let parentDiv = document.getElementById("listDiv");

// appendChild(parentDiv, myDiv);

// parentDiv.insertAdjacentElement("afterbegin", myDiv);
// parentDiv.insertAdjacentElement("afterend", myDiv);
// parentDiv.insertAdjacentElement("beforebegin", myDiv);
parentDiv.insertAdjacentElement("beforeend", myDiv);

function createElement(tagName, className, innerHTML) {
  let tagname = document.createElement(tagName);
  tagname.className = className || "";
  tagname.innerHTML = innerHTML || "";
  return tagname;
}

function appendChild(parent, child) {
  return parent.appendChild(child);
}
