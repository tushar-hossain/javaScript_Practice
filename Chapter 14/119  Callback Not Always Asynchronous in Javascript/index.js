//  Callback Not Always Asynchronous in Javascript

let arr = [1, 2, 3, 4];

let sqr = arr.map((v) => v * v);
console.log(sqr);

function asyncMap(arr, cb) {
  return arr.map((v) => {
    // setTimeout(cb, 0);
    // setTimeout(cb.bind(null, v), 0);
    setTimeout(() => cb(v), 0);
  });
}

// let qbarr = asyncMap(arr, (v) => v * v * v);
// console.log(qbarr);

let qbarr = asyncMap(arr, (v) => {
  console.log(v);
});
console.log(qbarr);
