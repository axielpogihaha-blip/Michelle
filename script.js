// 1. Counter ng days together
const startDate = new Date("2023-01-03"); // PALITAN mo ng petsa na naging kayo
const today = new Date();
const msPerDay = 1000 * 60 * 60 * 24;
const days = Math.floor((today - startDate) / msPerDay);

document.getElementById("counter").textContent =
  "Ilang araw na tayong magkasama: " + days;

// 2. Button na may nagbabagong sweet message
const messages = [
  "Sobrang mahal kita palagi asawa ko.",
  "I am always thankfully for having you baby.",
  "Sobrang ganda mo palagi loveloveee.",
  "Swerte ko talaga baby, ikaw na yan eh.",
  "Palagi ako proud sayo mahal, sobra sobra.",
  "Alam kong kayang kaya mo palagi palangga.",
  "Nandito lang ako palagi para sayo tangi.",
  "Tutuparin natin mga pangarap natin na magkasama hun.",
];

const button = document.getElementById("messageBtn");
const messageBox = document.getElementById("message");

let messageIndex = 0;

button.addEventListener("click", function () {
  messageBox.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
});

const songs = ["kanta1.mp3", "kanta2.mp3", "kanta3.mp3"];
let current = 0;

const song = document.getElementById("song");
const musicBtn = document.getElementById("musicBtn");
const nextBtn = document.getElementById("nextBtn");

musicBtn.addEventListener("click", function () {
  if (song.paused) {
    song.play();
    musicBtn.textContent = "⏸ Pause music";
  } else {
    song.pause();
    musicBtn.textContent = "▶ Play music";
  }
});

function playNext() {
  current = (current + 1) % songs.length;
  song.src = songs[current];
  song.play();
  musicBtn.textContent = "⏸ Pause music";
}

nextBtn.addEventListener("click", playNext);
song.addEventListener("ended", playNext);

// 4. Gallery slideshow na may message
const photos = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg", "photo4.jpeg"];
const captions = [
  "Unang date nating dalawa na kahit online lang ay nagpasaya sa atin ng sobra at nagpabusog pa hehe",
  "Unang Regalo na binigay ko sayo, sobrang tuwa ko kasi nagustuhan mo baby,at sobrang inalagaan mo talaga",
  "Unang Regalo na binigay ko sayo, sobrang tuwa ko kasi nagustuhan mo baby,at sobrang inalagaan mo talaga",
  "Unang bonding naman natin dahil first monthsary din natin, sobra cute natin dalawa at sweet sa laro na to mahal"
];
let photoIndex = 0;

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
const photoCount = document.getElementById("photoCount");

function showPhoto() {
  photo.src = photos[photoIndex];
  caption.textContent = captions[photoIndex];
  photoCount.textContent = (photoIndex + 1) + " / " + photos.length;
}

document.getElementById("nextPhoto").addEventListener("click", function () {
  photoIndex = (photoIndex + 1) % photos.length;
  showPhoto();
});

document.getElementById("prevPhoto").addEventListener("click", function () {
  photoIndex = (photoIndex - 1 + photos.length) % photos.length;
  showPhoto();
});

showPhoto();
