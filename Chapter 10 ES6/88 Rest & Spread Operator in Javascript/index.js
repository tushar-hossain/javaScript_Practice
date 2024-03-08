// Rest & Spread Operator in Javascript

function add(...rest) {
  return rest.reduce((a, b) => a + b);
}
console.log(add(10, 20, 30, 40));

let arr = [1, 2, 3, 4, 5];

console.log(...arr);

let obj = {
  a: 10,
  b: 20,
  c: 30,
};
console.log(obj);

let obj2 = { ...obj };
console.log(obj2);
