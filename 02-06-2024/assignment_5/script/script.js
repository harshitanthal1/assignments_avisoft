let num = parseInt(prompt("Enter a number:"));

if (!isNaN(num)) {
    console.log(`Multiplication table for ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${num * i}`);
    }
} else {
    console.log("Invalid input.");
}
