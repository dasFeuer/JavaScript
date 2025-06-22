function sayMyName() {
    const name = "Coder";
    console.log(`Hi! ${name}`);
}

sayMyName()

// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2)

// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2;
    // return result;

    return number1 + number2;

}

const result = addTwoNumbers(3, 1)

console.log("Result: ", result);

function loginUserMessage(username = "Developer"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Coder"));
console.log(loginUserMessage());



