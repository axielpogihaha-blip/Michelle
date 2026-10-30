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

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[randomIndex];
});
// 3. Music playlist
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
