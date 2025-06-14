// Array

const myArray = [1, 2, 3, 4, 5]; // Array, a list of numbers
console.log(myArray); // [1, 2, 3, 4, 5]

console.log(myArray[0]); // 1, first element

const myHeroes = ["Hanuman", "Ironman"]; // Array

// Array methods
myArray.push(6); // Add 6 to the end of the array
console.log(myArray); // [1, 2, 3, 4, 5, 6]

myArray.pop(); // Remove the last element
console.log(myArray); // [1, 2, 3, 4, 5]

myArray.unshift(0); // Add 0 to the beginning of the array
console.log(myArray); // [0, 1, 2, 3, 4, 5]

myArray.shift(); // Remove the first element
console.log(myArray); // [1, 2, 3, 4, 5]

myArray.splice(2, 1); // Remove the element at index 2
console.log(myArray); // [1, 2, 4, 5]

myArray.splice(2, 0, 3); // Add 3 at index 2
console.log(myArray); // [1, 2, 3, 4, 5]

myArray.slice(1, 3); // Get elements from index 1 to 3 (not including 3)
console.log(myArray.slice(1, 3)); // [2, 3], returns a new array with elements from index 1 to 2

myArray.reverse(); // Reverse the array
console.log(myArray); // [5, 4, 3, 2, 1]

myArray.sort(); // Sort the array
console.log(myArray); // [1, 2, 3, 4, 5] (sorting numbers in ascending order)

myArray.sort((a, b) => b - a); // Sort in descending order
console.log(myArray); // [5, 4, 3, 2, 1]

// includes
console.log(myArray.includes(3)); // true, checks if 3 is in the array
console.log(myArray.includes(6)); // false, checks if 6 is in the array
// indexOf
console.log(myArray.indexOf(3)); // 2, returns the index of 3
console.log(myArray.indexOf(6)); // -1, returns -1 if not found

const newArr = myArray.join();
console.log(newArr); // "5,4,3,2,1", converts array to string

const newArr2 = myArray.join(" - ");
console.log(newArr2); // "5 - 4 - 3 - 2 - 1", converts array to string with custom separator

const myArray2 = myArray.slice(1, 3); // Creates a new array with elements from index 1 to 3 (not including 3)
console.log(myArray2); // [4, 3], new array with elements from index 1 to 2
console.log("B ", myArray2); // B [4, 3], logs the new array

const myArray3 = myArray2.splice(1, 3); // Removes elements from index 1 to 3 (not including 3) from myArray2
console.log(myArray3); // [], logs the removed elements (none in this case)
console.log("C ", myArray2); // C [], logs the empty array
