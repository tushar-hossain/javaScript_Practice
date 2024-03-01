// what is Pure Functions.

/*
 => It return the same result if given the same arguments.
 
 => It does not cause anr observable side effects.
*/

function sqr(n) {
  return n * n;
}

var result = sqr(2);
console.log(result);

console.log(sqr(3));
console.log(sqr(3));

// Not a pure function

var n = 10;
function change() {
  n = 100;
  console.log(n);
}
change();
console.log(n);

var point = {
  x: 10,
  y: 50,
};

function pointfunction(point) {
  point.x = 100;
  point.y = 200;
  console.log(point);
}
pointfunction(point);
console.log(point);
