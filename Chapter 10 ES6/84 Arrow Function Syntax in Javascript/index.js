// Arrow Function Syntax in Javascript

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

let sum = (a, b) => {
  return a + b;
};
console.log(sum(20, 20));

let sum2 = (a, b) => a + b;
console.log(sum2(30, 20));

let sqr = (x) => x * x;
console.log(sqr(5));

let sqr2 = x => x * x;
console.log(sqr2(6));