// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-value"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function() {
  setMessage("");
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //check if won
  else if (guess === winningNum) {
    guessInput.disabled = "true";
    guessInput.style.borderColor = "green";
    setMessage(`${winningNum} is correct, YOU WIN! `, "green");
    guessBtn.value = "Play Again";
    guessBtn.addEventListener("click", function() {
      window.location.reload();
    });
  } else {
    guessesLeft = guessesLeft - 1;
    if (guessesLeft === 0) {
      guessInput.disabled = "true";
      guessInput.style.borderColor = "red";
      setMessage(
        `${guessesLeft} attemps remaing YOU LOST! Correct answer is ${winningNum}`,
        "red"
      );
      guessBtn.value = "Play Again";
      guessBtn.addEventListener("click", function() {
        window.location.reload();
      });
    } else {
      guessInput.style.borderColor = "red";
      setMessage(
        `Wrong Choice!, ${guessesLeft} attempts remaining try again`,
        "red"
      );
    }
  }
});

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Winning num
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
