let originalValue = parseFloat(prompt("Enter the value to convert:"));

let fromUnit = prompt("Enter the unit to convert from (e.g., km, Celsius):").toLowerCase();

let toUnit = prompt("Enter the unit to convert to (e.g., miles, Fahrenheit):").toLowerCase();

if (from === "km" && to === "miles") {
return value * 0.621371;
} else if (from === "celsius" && to === "fahrenheit") {
return (value * 9/5) + 32;
} else {
return "Invalid unit conversion";
}



