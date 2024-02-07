let user_input = prompt("Enter a value:");

if (user_input === "" || user_input === "0" || user_input == "null" || user_input === "undefined" || Number.isNaN(user_input) || user_input === "false") {
    console.log(`The entered value "${user_input}" is falsy.`);
} else {
    console.log(`The entered value "${user_input}" is truthy.`);
}