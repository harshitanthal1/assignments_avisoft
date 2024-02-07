let playAgain;

do {
    // Initialize the game
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    // Guessing Logic
    while (true) {
        let guess = parseInt(prompt("Guess the number (between 1 and 100):"));
        attempts++;

        if (guess < secretNumber) {
            alert("Too low! Try again.");
        } else if (guess > secretNumber) {
            alert("Too high! Try again.");
        } else {
            alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
            break;
        }
    }

    // Replay Feature
    playAgain = confirm("Do you want to play again?");
} while (playAgain);

alert("Thanks for playing!");
