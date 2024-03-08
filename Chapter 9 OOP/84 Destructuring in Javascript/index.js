// Destructuring in Javascript

let obj = {
  name: "Tushar",
  email: "tusharhossain455@gmail.com",
  address: {
    city: "Dhaka",
    country: "bangladesh",
  },
};

let {
  name,
  email,
  address,
  address: { city, country },
} = obj;

console.log(name, email, address, city, country);

let arr = [1, 2, 3, 4];

let [first, second, third, four] = arr;
console.log(first, second, third, four);
