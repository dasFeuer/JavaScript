const { a } = require("framer-motion/m");

const accoundId = 1234;
let accoundEmail = "user123@gmail.com";
var accountPassword = "password123";
accountCity = "Kathmandu"; // This will create a global variable
let accountState;

// accoundId = 2;

accoundEmail = "qwerty@gmail.com"
accountPassword = "newpassword456";
accountCity = "Lalitpur"; // This will update the global variable

// console.log("Account ID:", accoundId); 
console.table([accoundId, accoundEmail, accountPassword, accountCity, accountState]);

// Pefer not to use `var` for variable declarations as it has function scope and can lead to unexpected behavior. Use `let` or `const` instead.

