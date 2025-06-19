// const tinderUser = new Object();
const appUser = {}
appUser.id = "123uuid"
appUser.name = "User"
appUser.isLoggedIn = false;

// console.log(appUser);

const newUser = {
    email: "user123@gmail.com",
    fullname: {
        userFullname: {
            firstName: "A",
            lastName: "Coder"
        }
    }
}
// console.log(newUser.fullname?.userFullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 3: "b"}
const obj3 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4)

const users = [
    {
        id: 1,
        email: "coder1@gmail.cpm",
    },
        {
        id: 2,
        email: "coder2@gmail.cpm",
    },
        {
        id: 3,
        email: "coder3@gmail.cpm",
    }
]

users[2].email;
console.log(appUser);

console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));

console.log(appUser.hasOwnProperty('isLoggedIn'));







