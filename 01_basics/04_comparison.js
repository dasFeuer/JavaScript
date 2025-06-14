console.log("Comparison Operators");

console.log("02" > 1); // true, because "02" is coerced to 2
console.log("02" < 1); // false, because "02" is coerced to 2
console.log("02" >= 1); // true, because "02" is coerced to 2
console.log(null == 0); // false, null is not equal to 0
console.log(null == undefined); // true, null is loosely equal to undefined
console.log(null == 0); // false, null is not equal to 0
console.log(null >= 0); // true, null is coerced to 0
console.log(null <= 0); // true, null is coerced to 0

console.log(undefined == 0); // false, undefined is not equal to 0
console.log(undefined == null); // true, undefined is loosely equal to null
console.log(undefined >= 0); // false, undefined is not coerced to a number
console.log(undefined <= 0); // false, undefined is not coerced to a number
console.log(undefined > 0); // false, undefined is not coerced to a number
console.log(undefined < 0); // false, undefined is not coerced to a number
console.log(undefined == ""); // false, undefined is not equal to an empty string
console.log(undefined == "0"); // false, undefined is not equal to "0"
console.log(undefined == "undefined"); // false, undefined is not equal to "undefined"

//===
console.log("02" === 2); // false, strict equality does not coerce types
console.log("02" !== 2); // true, strict inequality does not coerce types
console.log(null === 0); // false, strict equality does not coerce types