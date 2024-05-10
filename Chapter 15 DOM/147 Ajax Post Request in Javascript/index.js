// Ajax Post Request in Javascript

let postFrom = document.getElementById("post-form");

let listposts = document.getElementById("posts");

let url = "https://jsonplaceholder.typicode.com/posts";

postFrom.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = this.title.value || undefined;
  let body = this.body.value || undefined;

  if (title && body) {
    let listObj = {
      userId: 100,
      title,
      body,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(listObj),
    })
      .then((response) => response.json())
      .then((posts) => {
        let post = listItem(posts);
        listposts.appendChild(post);
      })
      .catch((e) => console.log(e.message));
  }
});

function listItem(item) {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `user Id: ${item.userId} title: ${item.title} id: ${item.id} body: ${item.body}`;
  return li;
}
