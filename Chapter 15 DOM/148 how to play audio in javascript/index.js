// how to play audio in javascript

let button = document.querySelectorAll("button");

[...button].forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // console.log(this.innerHTML);
    // console.log(e.target.innerHTML);
    let text = this.innerHTML;
    audioPlay(text);
  });
});

function audioPlay(text) {
  switch (text) {
    case "A": {
      let audio = new Audio("Allah.mp3");
      audio.play();
      break;
    }
    case "B": {
      let audio = new Audio("Allah.mp3");
      audio.play();
      break;
    }
    case "C": {
      let audio = new Audio("Allah.mp3");
      audio.play();
      break;
    }
  }
}


