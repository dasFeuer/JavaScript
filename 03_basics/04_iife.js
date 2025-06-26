// Immediately Invoked Function Expressions (IIFE)

(function one() {
    // name IIFE
    console.log(`DB CONNECTED 0`)
})();

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED 1 ${name}`);
} )('developer');