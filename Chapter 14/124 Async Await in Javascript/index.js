// Async Await in Javascript

function test() {
  return Promise.resolve("test");
}

console.log(test());
test().then((res) => console.log(res));

let p1 = new Promise((resolve) => {
  setTimeout(resolve, 4000, "test value");
});

async function myAsynsFunc() {
  //   p1.then((v) => console.log(v));
  let v = await p1;
  console.log(v);
  console.log("Test");
}

myAsynsFunc();

async function asyncFunc() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  let names = await data.json();
  let users = names.map((v) => {
    return v.name;
  });
  console.log(users);
}

asyncFunc();
