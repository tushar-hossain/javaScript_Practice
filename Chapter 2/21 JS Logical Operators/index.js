// JS Logical Operators

// AND && , OR || , NOT !

var a = 10;
var b = 20;
var c = 30;

if (a > b && a > c) {
  console.log("A is a large number");
} else {
  console.log("At list one condition false");
}

if (b > a || a > c) {
  console.log("B and C is a large number");
} else {
  console.log("At list one condition false");
}

var a = 30;
var b = 20;
var c = 10;

if (b > a || c > b) {
  console.log("B and C is a large number");
} else {
  console.log("At list one condition false");
}
