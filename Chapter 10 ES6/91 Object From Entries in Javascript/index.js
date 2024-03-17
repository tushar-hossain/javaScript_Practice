// Object From Entries in Javascript

let obj = {
  a: 10,
  b: 20,
  c: 30,
};

console.log(Object.entries(obj));

let arr = [
  ["a", 10],
  ["b", 20],
];

let result = Object.fromEntries(arr);
console.log(result);
