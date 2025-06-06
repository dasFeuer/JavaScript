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