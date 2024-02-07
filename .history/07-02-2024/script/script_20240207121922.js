function addition(num1, num2){
    num1 = parseFloat(prompt("Enter the First Number:"));
    num2 = parseFloat(prompt("Enter the Second Number:"));
    return num1 + num2;
}
function subtraction(num1, num2){
    num1 = parseFloat(prompt("Enter the First Number:"));
    num2 = parseFloat(prompt("Enter the Second Number:"));
    return num1 - num2;
}
function multiplication(num1, num2){
    num1 = parseFloat(prompt("Enter the First Number:"));
    num2 = parseFloat(prompt("Enter the Second Number:"));
    return num1 * num2;
}
function division(num1, num2){
    num1 = parseFloat(prompt("Enter the First Number:"));
    num2 = parseFloat(prompt("Enter the Second Number:"));
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        console.log("Error: Division by zero.");
    }
}
function modulo(num1, num2){
    num1 = parseFloat(prompt("Enter the First Number:"));
    num2 = parseFloat(prompt("Enter the Second Number:"));
        if (num2 === 0) {
            console.error("Error: Division by zero!");
            return NaN;
        }
        return num1 % num2;
}


