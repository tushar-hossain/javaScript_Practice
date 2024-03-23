// Weak Set in Javascript

let a = { a: 10 },
  b = { b: 20 };

let weakSet = new WeakSet([a, b]);
// weakSet.add([
//   ["a", 10],
//   ["b", 20],
// ]);

console.log(weakSet);

weakSet.add((c = { c: 30 }));

console.log(weakSet);

weakSet.delete(c);
console.log(weakSet);

a = null;
console.log(weakSet.has(a));

console.log(weakSet.has(b));
