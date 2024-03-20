// Set in Javascript

let s1 = new Set([1, 2, 3, 4]);
// console.log(s1);

s1.add(5);
s1.add(6);

console.log(s1);
console.log(s1.size);

s1.delete(5);
console.log(s1);

console.log(s1.has(6));

console.log(s1.keys());

console.log(s1.values());

let keysIt = s1.keys();
console.log(keysIt.next());
console.log(keysIt.next());

let keysIt2 = s1.values();
console.log(keysIt2.next());
console.log(keysIt2.next());

for (let x of s1) {
  console.log(x);
}

console.log(s1.entries());

s1.clear();
console.log(s1);
