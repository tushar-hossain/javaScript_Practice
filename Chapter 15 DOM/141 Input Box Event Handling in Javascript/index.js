// Input Box Event Handling in Javascript

let names = document.getElementById("name");
let mail = document.getElementById("mail");

let addr = document.getElementById("address");

// names.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     document.getElementById("result").innerHTML = `Enter your Result: ${e.target.value}`;
//     e.target.value = "";
//   }
// });

[names, mail, addr].forEach((elements) => {
  elements.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("result").innerHTML = `Enter your Result: ${e.target.value}`;
      e.target.value = "";
    }
  });
});
