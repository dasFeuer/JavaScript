// Primitive data types in JavaScript

// 7 types : String, Number, BigInt, Boolean, Symbol, Null, Undefined
console.log("Primitive Data Types in JavaScript");

const score = 100; // Number
const scoreValue = 100.5; // Number with decimal

const isLoggedIn = true; // Boolean
const outSideTemp = null; // Null, represents no value
let userEmail; // Undefined, variable declared but not assigned

const id = Symbol("id"); // Symbol, unique identifier
const anotherId = Symbol("id"); // Another Symbol, even with the same description, it's unique
console.log(id === anotherId); // false, symbols are unique

const bigNumber = 1234567890123456789012345678901234567890n; // BigInt, for very large integers

// Reference types in JavaScript (Non-primitive types)
// 3 types : Object, Arrays, Functions

const heros = ["Thor", "Ironman", "Hulk"]; // Array, a list of values
let myObj = {
    name: "John",
    age: 30,
    isActive: true
}; // Object, a collection of key-value pairs

function myFunc() { // Function, a block of code that can be called
    console.log("Hello, World!");
}

console.log(typeof outSideTemp); // "object", null is considered an object in JavaScript
console.log(typeof scoreValue); // "number", scoreValue is a number
console.log(typeof isLoggedIn); // "boolean", isLoggedIn is a boolean

console.log(typeof myFunc); // "function", myFunc is a function
console.log(typeof heros); // "object", arrays are considered objects in JavaScript
console.log(typeof myObj); // "object", myObj is an object
console.log(typeof id); // "symbol", id is a symbol

// Stack (Primitive types) vs Heap (Non-primitive types)
// Primitive types are stored in the stack, while non-primitive types are stored in the heap.

let myYoutubeChannel = "Codevolution"; // String, a sequence of characters
let anotherChannel = myYoutubeChannel; // Copying the value of myYoutubeChannel
anotherChannel = "The Internet"// Changing anotherChannel does not affect myYoutubeChannel
console.log(anotherChannel); // "The Internet"
console.log(myYoutubeChannel); // "Codevolution"

let userOne = {
    email: "user@gmail.com",
    userId: "1234",     
    isActive: true
}; // Object, userOne is an object with properties
let userTwo = userOne; // Reference type, userTwo points to the same object as userOne
userTwo.email = "newUser123@gmail.com"; // Changing userTwo affects userOne
console.log(userOne.email); 
console.log(userTwo.email); 