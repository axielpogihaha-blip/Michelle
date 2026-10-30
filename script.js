// 1. Counter ng days together
const startDate = new Date("2026-01-03"); // PALITAN mo ng petsa na naging kayo
const today = new Date();
const msPerDay = 1000 * 60 * 60 * 24;
const days = Math.floor((today - startDate) / msPerDay);

document.getElementById("counter").textContent =
  "Ilang araw na tayong magkasama: " + days;

// 2. Button na may nagbabagong sweet message
const messages = [
  "Ikaw ang paborito kong tao.",
  "Salamat sa pagmamahal mo.",
  "Ang ganda mo ngayon, as always."
];

const button = document.getElementById("messageBtn");
const messageBox = document.getElementById("message");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[randomIndex];
});
