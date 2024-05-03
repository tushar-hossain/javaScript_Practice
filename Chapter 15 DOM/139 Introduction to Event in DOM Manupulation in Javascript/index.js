// Introduction to Event in DOM Manupulation in Javascript

let btn = document.getElementById("btn");

// btn.onclick = function (e) {
//   console.log("I am clicked");
// };

// btn.addEventListener("click", function (e) {
//   console.log("I am clicked");
//   console.log(e.target.innerHTML);
// });

let list = document.getElementById("list");
console.log(list);

btn.addEventListener("click", function (e) {
  let listItem = list.lastElementChild.cloneNode(true);
  listItem.innerHTML = "Newly Created Item";
  list.appendChild(listItem);
});

let box = document.getElementById("box");

// box.addEventListener("mousemove", function (e) {
//   document.getElementById("x-value").innerHTML = e.clientX;
//   document.getElementById("y-value").innerHTML = e.clientY;
// });

box.addEventListener("mousemove", function (e) {
  document.getElementById("x-value").innerHTML = e.offsetX;
  document.getElementById("y-value").innerHTML = e.offsetY;
  if (e.offsetX === 50 && e.offsetY === 50) {
    alert(50, 50);
  }
});
