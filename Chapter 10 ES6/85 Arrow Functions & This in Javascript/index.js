// Arrow Functions & This in Javascript

function test() {
  console.log(this);
}
test();

let obj = {
  name: "Tushar",
  print: function () {
    console.log(this);
    console.log(this.name);
  },
};
obj.print();

var obj2 = {
  name: "tushar",
  print: () => {
    console.log(this);
  },
};

obj2.print();

let obj3 = {
  name: "tushar",
  print: function () {
    // console.log(this);
    // let self = this;
    setTimeout(
      function () {
        //   console.log(self.name);
        console.log(this.name);
        console.log(this);
      }.bind(this),
      3000
    );
  },
};

obj3.print();

let obj4 = {
  name: "tushar",
  print: function () {
    setTimeout(() => {
      console.log(this.name);
      console.log(this);
    }, 3000);
  },
};

obj4.print();
