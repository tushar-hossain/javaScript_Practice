//  Finally Block in Javascript

try {
  console.log("I am line 1");
  throw new Error("I am your Error");
  console.log("I am line 2");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("I am final block.");
}
