//  Implement Fetch API in Javascript

let url = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    return Promise.resolve("Something...");
  })
  .then((res) => {
    console.log(res);
    return Promise.resolve("Another Something...");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e.message);
  });

let Base_url = "https://jsonplaceholder.typicode.com/users";

function getResponse(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          //   reject(xhr.status);
          reject(new Error("Error Occurred"));
        }
      }
    };
    xhr.send();
  });
}

// let res = getResponse(url);
// console.log(res);

getResponse(Base_url)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e.message);
  });
