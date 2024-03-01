// Function Scoping in Javascript

var a = "abc";

function x() {
  //   var a = 20;
  function y() {
    // var a = 10;
    console.log(a);
  }
  console.log(a);
  y();
}
x();


function test(n) {
  function a() {
    return n % 3 === 0;
  }
  function b() {
    return n % 5 === 0;
  }
  if (a() && b()) {
    console.log(n + " is a divisible both 3 and 5");
  } else {
    console.log("Not a valid number");
  }
}

test(10);
test(15);
