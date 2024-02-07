const userInput = prompt("Enter a value:");

if (userInput) {
    console.log(`The entered value "${userInput}" is truthy.`);
} else {
    console.log(`The entered value "${userInput}" is falsy.`);
}
