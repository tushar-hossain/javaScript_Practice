//  Static Method in Javascript

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  print() {
    console.log(this.name);
    console.log(this.email);
  }
  static create(str) {
    let person = JSON.parse(str);
    return new Person(person.name, person.email);
  }
}

let str = '{"name":"Tushar","email":"tushar@gmail.com"}';

let p1 = Person.create(str);
console.log(p1);
console.log(p1 instanceof Person);
console.log(p1.name);
console.log(p1.email);
