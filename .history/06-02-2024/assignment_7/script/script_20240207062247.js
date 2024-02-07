// Prompt the user to enter various values
let user_input = prompt("Enter a value:");

// Check if the entered value is truthy or falsy
if (userInput === "" || userInput === 0 || userInput === null || userInput === undefined || Number.isNaN(userInput) || userInput === false) {
    console.log(`The entered value "${userInput}" is falsy.`);
} else {
    console.log(`The entered value "${userInput}" is truthy.`);
}