// List and Input Event Handler in Javascript

let list = document.getElementById("list");

list.addEventListener("click", function (event) {
  if (this.contains(event.target)) {
    let innerText = event.target.innerHTML;
    event.target.innerHTML = "";
    let inputBox = createInputBox(innerText);
    event.target.appendChild(inputBox);

    inputBox.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        event.target.innerHTML = e.target.value;
      }
    });
  }
});

function createInputBox(value) {
  let inp = document.createElement("input");
  inp.type = "text";
  inp.className = "form-control";
  inp.value = value;
  return inp;
}
