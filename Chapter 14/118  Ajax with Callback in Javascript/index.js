//  Ajax with Callback in Javascript

// let xhr = new XMLHttpRequest();

// xhr.open("get", "https://jsonplaceholder.typicode.com/users");

// xhr.onreadystatechange = function (e) {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(xhr.response);
//     } else {
//       console.log(xhr.status);
//     }
//   }
// };

// xhr.send();

function getResponse(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.open("get", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        callback(null, response);
      } else {
        callback(xhr.status, null);
      }
    }
  };
  xhr.send();
}

getResponse("https://jsonplaceholder.typicode.com/users", function (err, response) {
  if (err) {
    console.log(err);
  } else {
    // console.log(response);
    response.forEach((r) => {
      alert(r.name);
    });
  }
});

getResponse("https://jsonplaceholder.typicode.com/posts", (err, res) => {
  if (err) {
    console.log(err.message);
  } else {
    // console.log(res);
    res.forEach((r) => {
      console.log(r.title);
    });
  }
});
