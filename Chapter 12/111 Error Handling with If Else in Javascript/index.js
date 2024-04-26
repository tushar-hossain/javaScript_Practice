// Error Handling with If Else in Javascript

function changeIt(value) {
  let result = Number.parseInt(value);
  if (!result) {
    // console.log("Please provide a value which is able to convert in Integer.");
    return "Please provide a value which is able to convert in Integer.";
  } else {
    return result;
  }
}

let rs = changeIt(45.236);
// let rs = changeIt('ffff')
console.log(rs);
