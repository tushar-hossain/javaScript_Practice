// Enhance Object in Javascript

let a = 10,
  b = 20;

let obj = {
  a,
  b,
  print() {
    console.log(this);
  },
};
console.log(obj);
obj.print()
