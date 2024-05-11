// DragEvent

// let div = document.querySelector("div");
// let p = document.querySelector("p");

// p.addEventListener("dragstart", function (e) {
//   e.dataTransfer.setData("text", e.target.id);
// });

// div.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });

// div.addEventListener("drop", function (e) {
//   let id = e.dataTransfer.getData("text");
//   div.appendChild(document.getElementById(id));
//   e.preventDefault();
// });

let div = document.getElementById("dragEvent");

let p = document.getElementById("para");

p.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text", e.target.id);
});

div.addEventListener("dragover", function (e) {
  e.preventDefault();
});

div.addEventListener("drop", function (e) {
  let data = e.dataTransfer.getData("text");
  this.appendChild(document.getElementById(data));
  e.preventDefault();
});

// Two box dragable event
let para2 = document.getElementById("para2");

div.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text", e.target.id);
});

para2.addEventListener("dragover", function (e) {
  e.preventDefault();
});

para2.addEventListener("drop", function (e) {
  let Data = e.dataTransfer.getData("text");
  this.appendChild(document.getElementById(Data));
  e.preventDefault();
});
