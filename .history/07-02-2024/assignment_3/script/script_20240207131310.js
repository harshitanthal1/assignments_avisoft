let play_again;

do {
    let random_number = Math.floor(Math.random() * 100) + 1;
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
            break;
        }
    }

    playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
} while (playAgain === "yes");

alert("Thankyou for playing!");