// Introduction to Promise in Javascript

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "One");
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Two");
});

// console.log(p1);
// console.log(p2);

p1.then((res) => {
  console.log(res);
});
p2.then((res) => {
  console.log(res);
});

function getIphone(isPassed) {
  return new Promise((resolve, reject) => {
    if (isPassed) {
      setTimeout(() => {
        resolve("I have Got an iPhone");
      }, 2000);
    } else {
      reject(new Error("You have Failed"));
    }
  });
}

// console.log(getIphone(true));

getIphone(true)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
