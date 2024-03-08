// Custom Iteratable Object in Javascript

let obj = {
  start: 1,
  ends: 5,
  [Symbol.iterator]: function () {
    let currentValue = this.start;
    let self = this;
    return {
      next() {
        return {
          done: currentValue > self.ends,
          vlaue: currentValue > self.ends ? undefined : currentValue++,
        };
      },
    };
  },
};

let result = obj[Symbol.iterator]();
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
