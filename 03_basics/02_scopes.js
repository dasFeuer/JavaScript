// var c = 300
let a = 300
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);



for (let index = 0; index <=10; index++) {
   const num = 5;
   const answer = `${num} X ${index} = ${num * index}`;
   console.log(answer);   
}


function one() {
    const username = "Coder";

    function two(){
        const website = "YouTube";
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()


if(true){
    const username = "Coder";
    if(username === "Coder") {
        const website = " YouTube";
        // console.log(username + website);
    }
    // console.log(website)
}
// console.log(username);

function addOne (num){
    return num + 1;
}

console.log(addOne(5));


addTwo(5);
const addTwo = function(num){
    return num + 2;
}

