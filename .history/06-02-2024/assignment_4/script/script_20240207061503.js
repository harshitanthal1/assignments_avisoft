let play_again;

do {
    // Initialize the game
    const random_number = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    // Guessing Logic
    while (true) {
        let guess = parseInt(prompt("Guess the number (between 1 and 100):"));
        attempts = attempts + 1;

        if (guess < random_number) {
            alert("Too low! Try again.");
        } else if (guess > random_number) {
            alert("Too high! Try again.");
        } else {
            alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
            break;
        }
    }

    playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
} while (playAgain === "yes");

alert("Thankyou for playing!");
