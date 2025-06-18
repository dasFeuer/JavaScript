// Singleton
// Objects.create


// Objects literals

const mySymbol = Symbol("key1");

const JsUser = {
    name: 'Coder',
    "full name": 'Coder In Earth',
    age: 21,
    [mySymbol]: "myKey1",
    location: 'Earth',
    email: "coderInEarth11@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySymbol]);

JsUser.email = "coderInCodingWorld11@gmail.com";
// Object.freeze(JsUser); // Prevents any changes to the object
JsUser.email = "coderInCodingWorld0101@gmail.com";
console.log(JsUser.email);
console.log(JsUser);

JsUser.greet = function () {
    console.log("Hello, " + this.name);
}

JsUser.greet2 = function () {
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greet); 
console.log(JsUser.greet());
console.log(JsUser.greet2());


