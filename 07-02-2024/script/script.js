function calc(choice){
    console.log("Calculator Menu:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. modulo");
    choice = parseInt(prompt("Enter your choice (1-5):"));
    return choice;
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

switch(calc()){
    case 1:
        num1 = parseFloat(prompt("Enter the First Number:"));
        num2 = parseFloat(prompt("Enter the Second Number:"));
        console.log(`Answer: ${addition(num1, num2)}`);
        break;
    case 2:
        num1 = parseFloat(prompt("Enter the First Number:"));
        num2 = parseFloat(prompt("Enter the Second Number:"));
        console.log(`Answer: ${subtraction(num1, num2)}`);
        break;
    case 3:
        num1 = parseFloat(prompt("Enter the First Number:"));
        num2 = parseFloat(prompt("Enter the Second Number:"));
        console.log(`Answer: ${multiplication(num1, num2)}`);
        break;
    case 4:
        num1 = parseFloat(prompt("Enter the First Number:"));
        num2 = parseFloat(prompt("Enter the Second Number:"));
        console.log(`Answer: ${division(num1, num2)}`);
        break;
    case 5:
        num1 = parseFloat(prompt("Enter the First Number:"));
        num2 = parseFloat(prompt("Enter the Second Number:"));
        console.log(`Answer: ${modulo(num1, num2)}`);
        break;
    default:
        console.log("Invalid Input");
}


