// Iterator With Symbol in Javascript

let arr = [1, 2, 3, 4];

let iterate = arr[Symbol.iterator]();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

let str = "TEXT";

let iterateText = str[Symbol.iterator]();
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());


