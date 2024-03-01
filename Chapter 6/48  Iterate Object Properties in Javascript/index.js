//  Iterate Object Properties in Javascript

var obj = {
  x: 10,
  y: 20,
  z: 30,
};

console.log("x" in obj);

for (var i in obj) {
  //   console.log(i);
  //   console.log(obj[i]);
  console.log(`value ${i} : ${obj[i]}`);
}
