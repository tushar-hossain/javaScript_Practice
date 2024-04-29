// Promise API in Javascript

// let delay = (s) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, s * 1000);
//   });

// delay(2).then(() => console.log("2 second delay"));
// delay(5).then(() => console.log("5 second delay"));

// promise methods

// let p1 = Promise.resolve("Test");
// console.log(p1);
// p1.then((res) => console.log(res));

// let p2 = Promise.reject("Reject");
// console.log(p2);
// p2.catch((e) => console.log(e));

// let p1 = Promise.resolve("One");
// let p2 = Promise.resolve("Two");
// let p3 = Promise.resolve("Three");

// let promiseArr = [p1, p2, p3];

// Promise.all(promiseArr).then((res) => {
//   console.log(res);
// });

let p1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "One");
});

let p2 = new Promise((resolve) => {
  setTimeout(resolve, 4000, "Two");
});

let p3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Three");
});

let promiseArr = [p1, p2, p3];

Promise.all(promiseArr).then((res) => {
  console.log(res);
});

Promise.race(promiseArr).then((res) => console.log(res));
