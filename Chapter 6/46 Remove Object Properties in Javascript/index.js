// Remove Object Properties in Javascript

var obj = {
  x: 10,
  y: 20,
  z: 30,
};

obj.z = undefined;
console.log(obj);

delete obj.z;
console.log(obj);
