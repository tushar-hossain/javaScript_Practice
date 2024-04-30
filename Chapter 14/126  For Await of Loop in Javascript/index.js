//  For Await of Loop in Javascript

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

async function iterate() {
  for await (let v of asyncItarable) {
    console.log(v);
  }
}

iterate();
