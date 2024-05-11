// Popup boxes

// alert, confirm, prompt

// let alt = alert("I am alert message");

// function deleteSomrthing() {
//   let value = confirm("Do you want to delete?");
//   if (value) {
//     console.log("Item is deleted");
//   } else {
//     console.log("Item is not deleted");
//   }
// }
// deleteSomrthing();

function wellcomeMessage() {
  let names = prompt("Enter your Name: ");
  let h1 = document.createElement("h1");
  let text;

  if (names === "" || names === null) {
    text = "Name is not Found";
  } else {
    text = `Wellcome ${names}`;
  }
  let textNode = document.createTextNode(text);
  h1.appendChild(textNode);
  document.body.appendChild(h1);
}

wellcomeMessage();
