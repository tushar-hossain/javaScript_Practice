// Setting Object Properties in Javascrip

var obj = {
  x: 10,
  y: 20,
  z: 30,
};

obj.x = 55;
console.log(obj);

obj.a = 50;
console.log(obj);

obj["z"] = 100;
console.log(obj);

var prop = "a";

obj[prop] = 200;
console.log(obj);