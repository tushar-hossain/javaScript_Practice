// Iterator Basics in Javascript

let arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

function createIterate(collection) {
  let i = 0;
  return {
    next() {
      return {
        done: i >= collection.length,
        value: collection[i++],
      };
    },
  };
}

let iterate = createIterate(arr);
// console.log(iterate);
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

console.dir(iterate.next);
