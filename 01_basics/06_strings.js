// String
const name = "Coder";
const repoCount = 100;

console.log("Hello " + name + ", your repo count is " + repoCount); // String concatenation
console.log(`Hello ${name}, your repo count is ${repoCount}`); // Template literals (ES6 feature) --> Recommended way

// Declaring strings
const gameName = new String ("Counter-Strike");

console.log(gameName[0]); // Accessing first character of the string
console.log(gameName.__proto__); // Accessing prototype of the string object

console.log(gameName.length); // Length of the string
console.log(gameName.toUpperCase()); // Convert string to uppercase
console.log(gameName.toLowerCase()); // Convert string to lowercase
console.log(gameName.charAt(2)); // Accessing first character using charAt method
console.log(gameName.indexOf('S')); // Finding index of a substring

const newString = gameName.substring(0, 8); // Extracting substring from index 0 to 8
console.log(newString); // "Counter-"

const anotherString = gameName.slice(-8, 4); // Extracting substring using slice method
console.log(anotherString); 

const newStringOne = "  Hello World!  ";
console.log(newStringOne.trim()); // Removing whitespace from both ends of the string

const url = "https://www.example.com/path/to/resource?query=123#fragment";
url.replace("example", "sample"); // Replacing "example" with "sample" in the URL
console.log(url); // "https://www.sample.com/path/to/resource?query=123#fragment"
const urlParts = url.split("/"); // Splitting the URL by "/"
const urlPartsOne = url.split("-"); // Splitting the URL by "-"
console.log(urlParts); // ["https:", "", "www.example.com", "path", "to", "resource?query=123#fragment"]
console.log(urlPartsOne); // ["https:", "", "www.example.com", "path", "to", "resource?query=123#fragment"]
console.log(url.includes("example")); // Checking if the URL includes "example"
