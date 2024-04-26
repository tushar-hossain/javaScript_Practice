//  Error Handling with Try Catch in Javascript

function makeError(text) {
  //   let str = text.trim();
  //   let words = str.split(" ");
  //   return words;
  try {
    let str = text.trim();
    let words = str.split(" ");
    return words;
  } catch (error) {
    // console.log(error);
    // console.log(error.message);
    console.log("Please privide a valide Text.");
  }
}

let msg = makeError("           I am a String       ");

console.log(msg);
