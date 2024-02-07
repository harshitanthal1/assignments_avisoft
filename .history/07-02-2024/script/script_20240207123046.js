function calc(choice){
    console.log("Calculator Menu:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. modulo");
    choice = parseInt(prompt("Enter your choice (1-4):"));
    return choice;
}

function userInput(num1, num2){
    num1 = parseFloat(prompt("Enter the First Number:"));
    num2 = parseFloat(prompt("Enter the Second Number:"));
}

function addition(num1, num2){
    return num1 + num2;
}
function subtraction(num1, num2){
    return num1 - num2;
}
function multiplication(num1, num2){
    return num1 * num2;
}
function division(num1, num2){
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        console.log("Error: Division by zero.");
    }
}
function modulo(num1, num2){
        if (num2 === 0) {
            console.error("Error: Division by zero!");
        }
        return num1 % num2;
}

switch(calc(choice)){
    case 1:
        userInput(num1, num2);
        addition(userInput(num1, num2));
    case 2:
        userInput(num1, num2);
        subtraction(userInput(num1, num2));
    case 3:
        userInput(num1, num2);
        multiplication(userInput(num1, num2));
    case 4:
        userInput(num1, num2);
        division(userInput(num1, num2));
    case 5:
        userInput(num1, num2);
        modulo(userInput(num1, num2));
    default:
        console.log("Invalid Input");
}


