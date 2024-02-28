// And Or Shorthand

var name = "";

// var fullName;

// if (name.length === 0) {
//   fullName = "Tushar Hossain";
// } else {
//   fullName = name;
// }
// console.log(fullName);

// var name = "Tushar ";

var fullName = name || "Tushar Hossain";

console.log(fullName);

var isOk = true;
// var isOk = false;

var result = isOk && console.log("Every thing is Ok");
