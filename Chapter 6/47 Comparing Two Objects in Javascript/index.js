// Comparing Two Objects in Javascript

var obj = {
  x: 10,
  y: 20,
};

var obj2 = {
  x: 10,
  y: 20,
};

// console.log(obj === obj2);

if (obj.x === obj2.x && obj.y === obj2.y) {
  console.log("true");
} else {
  console.log("false");
}

console.log(JSON.stringify(obj) === JSON.stringify(obj2));
