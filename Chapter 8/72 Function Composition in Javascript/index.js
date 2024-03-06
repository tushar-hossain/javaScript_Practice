// Function Composition in Javascript

function input(inp) {
  console.log(inp);
}

function multiply(n) {
  return n * 5;
}

function add(a, b) {
  return a + b;
}

input(multiply(add(5, 3)));
