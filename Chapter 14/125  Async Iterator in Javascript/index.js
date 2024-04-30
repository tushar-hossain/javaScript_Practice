//  Async Iterator in Javascript

let asyncItarable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return Promise.resolve({
            value: i++,
            done: false,
          });
        } else {
          return Promise.resolve({
            value: undefined,
            done: true,
          });
        }
      },
    };
  },
};

let iterate = asyncItarable[Symbol.asyncIterator]();
// console.log(iterate.next());

(async function () {
  //   let res = await iterate.next();
  //   console.log(res);
  console.log(await iterate.next());
  console.log(await iterate.next());
  console.log(await iterate.next());
  console.log(await iterate.next());
  console.log(await iterate.next());
  console.log(await iterate.next());
})();
