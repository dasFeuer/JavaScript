const marvelHeroes = ["Thor", "Ironman", "Hulk", "Captain America", "Black Widow", "Hawkeye"];
const dcHeroes = ["Superman", "Batman", "Flash", "Wonderwoman", "Aquaman", "Green Lantern"];

// Merging two arrays
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes); // ["Thor", "Ironman", "Hulk", "Captain America", "Black Widow", "Hawkeye", "Superman", "Batman", "Flash", "Wonderwoman", "Aquaman", "Green Lantern"]

// Spread operator
const allHeroesSpread = [...marvelHeroes, ...dcHeroes];
console.log(allHeroesSpread); // ["Thor", "Ironman", "Hulk", "Captain America", "Black Widow", "Hawkeye", "Superman", "Batman", "Flash", "Wonderwoman", "Aquaman", "Green Lantern"]

const anotherArray = [1, 2, [3, 4, 5], 6, [7, 8, [1, 4]]];
// Flattening an array
const flattenedArray = anotherArray.flat(Infinity);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 1, 4]

console.log(Array.isArray("Hello")); // false, "Hello" is not an array
console.log(Array.from("Hello")); // ["H", "e", "l", "l", "o"], converts string to array
console.log(Array.from({name: "John"})); 

let score1 = 10;
let score2 = 20;
let score3 = 30;

const scores = [score1, score2, score3]; // Using variables to create an array
console.log(scores); // [10, 20, 30]

console.log(Array.of(score1, score2, score3)); // [10, 20, 30], creates an array from the arguments




