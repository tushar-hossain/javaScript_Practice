// Inner Function in Javascript

function something(greet, name) {
  function test() {
    console.log(greet, name);
  }
  test();
}

something("Good Morning", "Tushar Hossain");

function greetMessage(greet, name) {
  function firstName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "";
    }
  }
  var message = greet + " " + firstName();
  console.log(message);
}

greetMessage("Good Morning", "Tushar Hossain");

greetMessage("Good Morning");
