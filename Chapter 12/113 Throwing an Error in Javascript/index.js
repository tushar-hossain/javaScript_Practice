// Throwing an Error in Javascript

try {
  console.log("I am line 1");
  console.log("I am line 2");
  throw new Error("I am your Error");
  console.log("I am line 3");
} catch (error) {
  console.log(error.message);
}
