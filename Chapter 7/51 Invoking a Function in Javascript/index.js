// Invoking a Function in Javascript

function add() {
  var a = 10;
  var b = 20;
  console.log(a + b);
}

add();

function sub() {
  var a = 50;
  var b = 30;
  console.log(a - b);
}

sub();

function functionName() {
  console.log("I am a function");
}
functionName();

for (var i = 0; i < 10; i++) {
  functionName();
}
