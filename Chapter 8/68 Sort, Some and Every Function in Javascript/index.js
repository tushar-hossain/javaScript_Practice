// Sort, Some and Every Function in Javascript

var arr = [10, 2, 3, 1, 4, 5, 12, 7, 8];

// var result = arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(result);

// arr.sort();
// console.log(arr);

arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr);

var persons = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "B",
    age: 19,
  },
  {
    name: "C",
    age: 26,
  },
  {
    name: "D",
    age: 21,
  },
];

// persons.sort();
// console.log(persons);

persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(persons);

var result = arr.every(function (value) {
  // return value % 2 === 0;
  return value >= 0;
});
console.log(result);

var result2 = arr.some(function (value) {
  return value % 2 === 0;
  // return value >= 0;
});
console.log(result2);
