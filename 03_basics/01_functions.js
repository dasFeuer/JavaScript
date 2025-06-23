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

function calculateCarPrice(...num1){
    return num1;
}

// console.log(calculateCarPrice(200, 100, 500));

const user = {
    username: "Coder",
    age: 22
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
    
}

// handleObject(user);
handleObject({
    username: "developer",
    age: 22
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 800]));