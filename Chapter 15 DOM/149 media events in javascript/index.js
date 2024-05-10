// media events

let video = document.querySelector("video");

video.addEventListener("canplay", function (e) {
  console.log("Play");
});

video.addEventListener("play", function (e) {
  console.log("play");
});

video.addEventListener("pause", function (e) {
  console.log("pause");
});

video.addEventListener("progress", function (e) {
  console.log("progress");
});

video.addEventListener("volumechange", function (e) {
  console.log("volumechange");
});

video.addEventListener("ended", function (e) {
  console.log("ended");
});

video.addEventListener("waiting", function (e) {
  console.log("waiting");
});

video.addEventListener("fullscreenchange", function (e) {
  console.log("fullscreenchange");
});
