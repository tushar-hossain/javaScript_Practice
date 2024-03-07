//  THIS in Javascript

function func() {
  console.log(this);
}

func();
// new func();

var rect = {
  width: 100,
  height: 50,
  draw: function () {
    console.log("I am a reactangle");
    this.print();
    console.log(this);
  },
  print: function () {
    console.log(`My width is ${this.width}`);
    console.log(`My height is ${this.height}`);
  },
};

console.log(rect);
rect.draw();

var another = {
  width: 50,
  height: 50,
  printProperties: rect.print,
};
another.printProperties();
