console.log("Calculator Menu:");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

let choice = parseInt(prompt("Enter your choice (1-4):"));

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let result;
switch (choice) {
    case 1:
        result = num1 + num2;
        console.log(`Result: ${num1} + ${num2} = ${result}`);
        break;
    case 2:
        result = num1 - num2;
        console.log(`Result: ${num1} - ${num2} = ${result}`);
        break;
    case 3:
        result = num1 * num2;
        console.log(`Result: ${num1} * ${num2} = ${result}`);
        break;
    case 4:
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(`Result: ${num1} / ${num2} = ${result}`);
        } else {
            console.log("Error: Division by zero.");
        }
        break;
    default:
        console.log("Invalid Input.");
}
        
        
