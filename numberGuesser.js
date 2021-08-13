let prompt = require("prompt-sync")();

let maximumNumber = parseInt(prompt("Enter the Maximum number to Start: "));
let targetNumber = Math.floor(Math.random() * maximumNumber) + 1;
let guess = parseInt(prompt("Enter your first Guess: "));
let numberOfAttempts = 1;

while (!maximumNumber) {
  maximumNumber = parseInt(prompt("Enter a valid number!!! "));
};
while (parseInt(guess) !== targetNumber) {
  if (guess === "quit") break;
  numberOfAttempts++;
  if (guess > targetNumber) {
    guess = prompt("Too High!! Enter a new guess: ");
  } else {
    guess = prompt("Too Low!! Enter a new guess: ");
  };
};

if (guess === "quit") {
  console.log("OK, YOU QUIT!!!!!");
} else {
  console.log("Congrats you WIN!!!");
  console.log(`You got it! It took you ${numberOfAttempts} guesses`);
};