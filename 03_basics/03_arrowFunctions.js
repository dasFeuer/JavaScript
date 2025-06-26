const { i } = require("framer-motion/client");

const user = {
    username: "Coder",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "Developer";
// user.welcomeMessage();

// console.log(this);

// function one() {
//     let username = "Programmer"
//     console.log(this.username);
    
// }
// one()


// const one = function () {
//     let username = "Programmer"
//     console.log(this.username);
// }

// one()

const one = () => {
    let username = "Programmer"
    console.log(this);
}

// one() 

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "coder"});


const result = addTwo(3, 7);
console.log(result);

// const myArray = [2, 3, 4, 7, 9];

// myArray.forEach();

