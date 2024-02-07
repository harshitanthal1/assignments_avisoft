let scores = [];

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function playGame() {
    let random_number = generateRandomNumber();
    let attempts = 0;

    while (true) {
        let guess = parseInt(prompt("Guess the number (between 1 and 100):"));
        attempts = attempts + 1;

        if (guess < random_number) {
            alert("Too low! Try again.");
        } else if (guess > random_number) {
            alert("Too high! Try again.");
        } else {
            alert(`Congratulations! You guessed the number ${random_number} in ${attempts} attempts.`);
            scores.push(attempts);
            break;
        }
    }
}

function playAgain() {
    let playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
    return playAgain === "yes";
}

do {
    playGame();
} while (playAgain());

alert("Thank you for playing!");

console.log("Scores:", scores);
