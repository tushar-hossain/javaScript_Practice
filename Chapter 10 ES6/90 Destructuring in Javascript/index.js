// Destructuring in Javascript

let obj = {
  name: "tushar",
  email: "tushar@gmail.com",
  country: {
    address: "dhaka",
    division: "dhaka",
  },
};

let {
  name,
  email,
  country,
  country: { address, division },
} = obj;

console.log(name);
console.log(email);
console.log(country);
console.log(country.address);
console.log(country.division);

let arr = [1, 2, 3, 4, 5];

let [one, two, three, four, five] = arr;

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
