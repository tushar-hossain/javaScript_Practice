// Async Generators in Javascript

async function* asyncGener() {
  let i = 0;
  while (true) {
    if (i > 5) return;
    yield Promise.resolve(i++);
  }
}

(async function () {
  for await (let v of asyncGener()) {
    console.log(v);
  }
})();
