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

switch(userInput){
    case 1:
        console.log()
}


