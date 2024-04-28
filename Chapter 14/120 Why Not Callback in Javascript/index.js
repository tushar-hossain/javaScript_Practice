// Why Not Callback in Javascript

function getResponse(url, Callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        Callback(null, response);
      } else {
        Callback(xhr.status, null);
      }
    }
  };
  xhr.send();
}

let url = "https://jsonplaceholder.typicode.com/users";

getResponse(url, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

let Base_url = "https://jsonplaceholder.typicode.com";

getResponse(`${Base_url}/posts`, (err, res) => {
  if (err) {
    throw new Error("Error Occurred");
  } else {
    // console.log(res);
    getResponse(`${Base_url}/posts/1`, (err, res) => {
      if (err) {
        throw new Error("Error Occurred");
      } else {
        // console.log(res);
        getResponse(`${Base_url}/comments`, (err, res) => {
          if (err) {
            throw new Error("Error Occurred");
          } else {
            console.log(res);
          }
        });
      }
    });
  }
});

