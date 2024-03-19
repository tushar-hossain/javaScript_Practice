// Generators in Javascript

let obj = {
  start: 1,
  end: 5,
  [Symbol.iterator]: function () {
    let currentValue = this.start;
    let self = this;
    return {
      next() {
        return {
          done: currentValue >= self.end,
          value: currentValue >= self.end ? undefined : currentValue++,
        };
      },
    };
  },
};

let iterat = obj[Symbol.iterator]();
console.log(iterat.next());
console.log(iterat.next());
console.log(iterat.next());
console.log(iterat.next());
console.log(iterat.next());



let obj2 = {
  start: 1,
  end: 5,
  [Symbol.iterator]: function* () {
    let currentValue = this.start;
    while (currentValue <= this.end) {
      yield currentValue++;
    }
  },
};

let iterat2 = obj2[Symbol.iterator]();
console.log(iterat2.next());
console.log(iterat2.next());
console.log(iterat2.next());
console.log(iterat2.next());
console.log(iterat2.next());
console.log(iterat2.next());



let arr = [1, 2, 3, 4];

function* generate(collection) {
  for (let i = 0; i < collection.length; i++) {
    yield collection[i];
  }
}

let it = generate(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());