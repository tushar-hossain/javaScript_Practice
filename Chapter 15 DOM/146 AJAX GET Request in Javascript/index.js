// AJAX GET Request in Javascript

let load = document.getElementById("load");
let postItem = document.getElementById("posts");

let url = "https://jsonplaceholder.typicode.com/posts";

load.addEventListener("click", function (e) {
  fetch(url)
    .then((response) => response.json())
    .then((posts) => {
      //   posts.forEach((post, ind) => {
      //     let postList = listItemGenerator(post, ind);
      //     postItem.appendChild(postList);
      //   });

      posts.map((post, ind) => {
        let postList = listItemGenerator(post, ind);
        postItem.appendChild(postList);
      });
    })
    .catch((e) => console.log(e.message));
});

function listItemGenerator(item, ind) {
  let lists = document.createElement("li");
  lists.className = "list-group-item";
  lists.innerHTML = `${ind + 1}. ${item.title}`;
  return lists;
}
