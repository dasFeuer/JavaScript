"use strict"; // Use strict mode to enforce stricter parsing and error handling in your JavaScript code and treat all JS code as newer version

// alert(3 + 3); we are using node.js, not browser. So we cannot use alert() here. Instead, we can use console.log() to print messages to the console.
// Data Types in JavaScript
// JavaScript has dynamic typing, meaning variables can hold values of any type and can change types at runtime.

// Primitive Data Types
let name = "Barun"
let age = 21
let isLoggedIn = true
let state = null // state is explicitly set to null, indicating no value or empty value


// number => 2 to power 53
// bigint
// string => ""
// boolean => true or false
// null => empty value/ standalone value
// undefined => variable is declared but not assigned a value
// symbol => unique value, used for object properties

// Non-Primitive Data Types
// object => collection of key-value pairs, can hold any data type
console.log(typeof age); // number
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a known bug in JavaScript)
