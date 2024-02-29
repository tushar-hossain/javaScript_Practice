//  Array Insert Remove and Replace

var arr = [1, 2, 3, 4, 5, 6];
arr.push(7);
arr.unshift(8);
arr.pop()
arr.splice(2, 0, 9);
arr.splice(3,1)
arr.shift()

console.log(arr);

var arr2 = arr.slice(2, 4);
console.log(arr2);
