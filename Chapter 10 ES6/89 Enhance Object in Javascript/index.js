// Enhance Object in Javascript

let a = 10,
  b = 20;

let obj = {
  a,
  b,
};
console.log(obj);

let obj2 = {
  name: "Tushar",
  email: "tushar@gmail.com",
  print() {
    console.log(this.name);
    console.log(this.email);
  },
};

console.log(obj2);
obj2.print();
