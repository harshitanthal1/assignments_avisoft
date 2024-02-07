let score = parseFloat(prompt("Enter your score out of 100: "));

if (score < 101 && score > -1) {
    if (grade > 96 && grade < 101) {
        console.log("A+");
    } else if (grade > 96) {
        console.log("A+");
    } else if (grade > 92) {
        console.log("A");
    } else if (grade > 89) {
        console.log("A-");
    } else if (grade > 86) {
        console.log("B+");
    } else if (grade > 82) {
        console.log("B");
    }
} else if (score > 100 || score < 0) {
    console.log("Enter the number between 0 to 100.");
} else {
    console.log("Invalid Input.");
}

