"use strict";
/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number ✔🎉";
document.querySelector(".number").textContent = 6;
document.querySelector(".guess").value = 4;
console.log(document.querySelector(".guess").value);*/
/*document.querySelector(".check").addEventListener("click", function () {
 document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number ";
  }
});
 */
"use strict";

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;

function printFunction() {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number ⛔️";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number 🎉";
    document.querySelector(".number").textContent = secretNumber;

    // Update highscore if current score is higher
    const currentHighscore = Number(document.querySelector(".highscore").textContent);
    if (score > currentHighscore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      const difference = Math.abs(secretNumber - guess);

      if (difference <= 2) {
        document.querySelector(".message").textContent = guess > secretNumber ? "Very close, but too high 📈" : "Very close, but too low 📉";
      } else if (difference <= 5) {
        document.querySelector(".message").textContent = guess > secretNumber ? "Close, but still too high 📈" : "Close, but still too low 📉";
      } else {
        document.querySelector(".message").textContent = guess > secretNumber ? "Too high 📈" : "Too low 📉";
      }

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 💥";
    }
  }
}

function returnFunction() {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  score = 10;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = Number(document.querySelector(".highscore").textContent) || 0;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
}
