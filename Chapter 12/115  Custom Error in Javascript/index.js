//  Custom Error in Javascript

class CustomError extends Error {
  constructor(msg) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

try {
  console.log("I am line 1");
  throw new CustomError("I am your Error");
  console.log("I am line 2");
} catch (error) {
  console.log(error);
    console.log(error.message);
    console.dir(error);
}
