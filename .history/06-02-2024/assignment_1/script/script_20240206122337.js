let num = parseFloat(prompt("Enter a number:"));

if (num < 0) {
    console.log("Number is negative.");
} else if (num > 0) {
    console.log("Number is positive.");
} else if (num === 0) {
    console.log("Number is zero.");
} else {
    console.log("Invalid Input.");
}