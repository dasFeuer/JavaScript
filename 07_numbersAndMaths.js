const score = 100; // Number

const balance = new Number(100); // Object wrapper for number
console.log(balance); // Number {100}
console.log(typeof balance); // "object", because it's a Number object

console.log(balance.toString().length); // Length of the string representation of the number
console.log(balance.toFixed(2)); // "100.00", fixed-point notation with 2 decimal places
console.log(balance.toPrecision(4)); // "100.0", string representation with 4 significant digits

const otherNumber = 132.9877
console.log(otherNumber.toFixed(2)); // "132.99", rounds to 2 decimal places
console.log(otherNumber.toPrecision(4)); // "132.99", rounds to 4 significant digits
console.log(otherNumber.toExponential(2)); // "1.33e+2", scientific notation with 2 decimal places

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // "1,000,000", formatted with locale-specific separators
console.log(hundreds.toLocaleString("en-IN")); // "10,00,000", formatted for Indian locale

// --Maths--

console.log(Math); // Math object provides mathematical constants and functions
console.log(Math.round(3.5)); // 4, rounds to the nearest integer
console.log(Math.max(1, 2, 3, 4, 5)); // 5, maximum value
console.log(Math.min(1, 2, 3, 4, 5)); // 1, minimum value
console.log(Math.random()); // Random number between 0 (inclusive) and 1 (exclusive)
console.log((Math.random()*10) + 1); // Random number between 1 (inclusive) and 11 (exclusive)
console.log(Math.random() * (10 - 1) + 1); // Random number between 1 (inclusive) and 10 (exclusive)
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 (inclusive) and 10 (inclusive)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between min (inclusive) and max (inclusive)

console.log(Math.PI); // 3.141592653589793, value of π
console.log(Math.E); // 2.718281828459045, value of e (Euler's number)
console.log(Math.SQRT2); // 1.4142135623730951, square root of 2
console.log(Math.SQRT1_2); // 0.7071067811865476, square root of 1/2
console.log(Math.LN2); // 0.6931471805599453, natural logarithm of 2
console.log(Math.LN10); // 2.302585092994046, natural logarithm of 10
console.log(Math.LOG2E); // 1.4426950408889634, base-2 logarithm of e
console.log(Math.LOG10E); // 0.4342944819032518, base-10 logarithm of e
console.log(Math.floor(3.9)); // 3, rounds down to the nearest integer
console.log(Math.ceil(3.1)); // 4, rounds up to the nearest integer
console.log(Math.abs(-5)); // 5, absolute value
console.log(Math.pow(2, 3)); // 8, 2 raised to the power of 3
console.log(Math.sqrt(16)); // 4, square root of 16
console.log(Math.sin(Math.PI / 2)); // 1, sine of π/2
console.log(Math.cos(0)); // 1, cosine of 0
console.log(Math.tan(Math.PI / 4)); // 1, tangent of π/4
console.log(Math.asin(1)); // 1.5707963267948966, arcsine of 1 (π/2)
console.log(Math.acos(1)); // 0, arccosine of 1
console.log(Math.atan(1)); // 0.7853981633974483, arctangent of 1 (π/4)
console.log(Math.atan2(1, 1)); // 0.7853981633974483, arctangent of 1/1 (π/4)   
console.log(Math.log(10)); // 2.302585092994046, natural logarithm of 10
console.log(Math.log2(8)); // 3, base-2 logarithm of 8
console.log(Math.log10(100)); // 2, base-10 logarithm of 100
console.log(Math.sign(-5)); // -1, sign of -5 (negative)
console.log(Math.sign(0)); // 0, sign of 0
console.log(Math.sign(5)); // 1, sign of 5 (positive)
console.log(Math.trunc(3.9)); // 3, truncates the decimal part
console.log(Math.hypot(3, 4)); // 5, hypotenuse of a right triangle with sides 3 and 4
console.log(Math.imul(2, 3)); // 6, performs integer multiplication

