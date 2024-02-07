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
    } else if (grade > 79) {
        console.log("B-");
    } else if (grade > 76) {
        console.log("C+");
    } else if (grade > 72) {
        console.log("C");
    } else if (grade > 69) {
        console.log("C-");
    } else if (grade > 66) {
        console.log("D+");
    } else if (grade > 62) {
        console.log("D");
    } else if (grade > 59) {
        console.log("D-");
    } else {
        console.log("F");
    }
} else if (score > 100 || score < 0) {
    console.log("Enter the number between 0 to 100.");
} else {
    console.log("Invalid Input.");
}

