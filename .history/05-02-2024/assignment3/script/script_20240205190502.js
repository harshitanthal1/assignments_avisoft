let num = parseFloat(prompt("Enter the value to convert:"));

let from_unit = prompt("Enter the unit to convert from (e.g., km, Celsius):");

let to_unit = prompt("Enter the unit to convert to (e.g., miles, Fahrenheit):");

if (from === "km" && to === "miles") {
    console.log(num * 0.621371, "miles.");
} else if (from === "celsius" && to === "fahrenheit") {
    console.log((num * 9/5) + 32, "fahrenheit.");
} else {
    console.log("Invalid unit conversion");
}
