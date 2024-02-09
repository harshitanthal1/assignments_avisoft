let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let add = num1 + num2;
let diff = num1 - num2;
let multi = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;

console.log("Addition of ", num1, "and ", num2, "is ", add);
console.log("Subtraction of ", num1, "and ", num2, "is ", diff);
console.log("Multiplication of ", num1, "and ", num2, "is ", multi);
console.log("Division of ", num1, "and ", num2, "is ", division);
console.log("Modulo of ", num1, "and ", num2, "is ", modulo);
