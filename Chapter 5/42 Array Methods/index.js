// Array Methods

var arr = [1, 2, 3, 4, 5, 6];

console.log(arr.join(", "));
console.log(arr.join(" "));
console.log(arr.join(" | "));

console.log(arr.fill(" "));
console.log(arr.fill("true"));
console.log(arr.fill("0"));

var arr2 = [7, 8, 9, 10];

var arr3 = arr.concat(arr2);
console.log(arr3);

console.log(Array.isArray(arr));

var arr4 = Array.from(arr);
console.log(arr4);
