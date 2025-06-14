let score = "user";
console.log(typeof score);
console.log(typeof String(score));

let valueInNumber = Number(score); // Convert string to number
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN if conversion fails

// "33"=> 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn); // Convert number to boolean
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn); // true if isLoggedIn is non-zero, false if zero

// 1 => true; // 0 => false
// "" => false; // "user" => true

let someValue = 77
let stringValue = String(someValue); // Convert number to string
console.log(typeof stringValue);
console.log(stringValue); // "77"


// Operations with different types
let value = 3
let negativeValue = -value; // Negation
console.log(negativeValue); // -3

let str1 = "Hello"
let str2 = "World";
let str3 = str1 + " " + str2; // String concatenation
console.log(str3); // "Hello World"

console.log("1" + 2); // "12" - string concatenation
console.log(1 + "2"); // "12" - string concatenation
console.log(1 + 2); // 3 - numeric addition
console.log("1" - 2); // -1 - numeric subtraction
console.log("1" + "2"); // "12" - string concatenation
console.log("1" + 2 + 2); // "122" - string concatenation
console.log("1" - 2 + 2); // 1 - numeric subtraction and addition
console.log(1 + 2 + "2"); // "32" - numeric addition followed by string concatenation

console.log((3 + 2) * 5 % 3); // 1 - arithmetic operations with precedence

console.log(+true); // 1 - unary plus converts boolean to number
console.log(+false); // 0 - unary plus converts boolean to number
console.log(+""); // 0 - unary plus converts empty string to number

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100;
gameCounter++; // Increment gameCounter by 1. This is prefix increment
// ++gameCounter; // Increment gameCounter by 1 again. // This is postfix increment
console.log(gameCounter); // 101
