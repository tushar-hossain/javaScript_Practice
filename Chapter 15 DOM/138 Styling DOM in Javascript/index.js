// Styling DOM in Javascript

let paragraph = document.getElementById("para");

paragraph.style.background = "red";
paragraph.style.textAlign = "center";
paragraph.style.color = "white";

let styleObj = {
  background: "black",
  color: "red",
  fontSize: "20px",
};

let list = document.getElementById("list");

[...list.children].forEach((li) => {
  Object.assign(li.style, styleObj);
});
