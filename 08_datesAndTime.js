// Dates
let myDate = new Date();;
console.log(myDate); // Current date and time
console.log(myDate.toString()); // Convert to string
console.log(myDate.toISOString()); // Convert to ISO string
console.log(myDate.toDateString()); // Convert to date string
console.log(myDate.toTimeString()); // Convert to time string
console.log(myDate.toLocaleString()); // Convert to locale string
console.log(myDate.getFullYear()); // Get the year
console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2023, 0, 1); // January 1, 2023
// let myCreatedDate = new Date(2023, 0, 23, 7, 4); // January 23, 2023, at 07:04
// console.log(myCreatedDate); // Specific date and time

// let myCreatedDate = new Date('2023-01-23'); // January 23, 2023
let myCreatedDate = new Date('01-14-2023'); // January 14, 2023
console.log(myCreatedDate.toDateString); // Convert to date string

let myTimeStamp = Date.now(); // Get current timestamp
console.log(myTimeStamp); // Current timestamp in milliseconds
console.log(myCreatedDate.getTime()); // Get timestamp of specific date
console.log(Math.floor(Date.now()/100)); // Get current timestamp in seconds
console.log(Math.floor(myCreatedDate.getTime()/100)); // Get timestamp of specific date in seconds

let newDate = new Date();
console.log(newDate); // Current date and time
console.log(newDate.getFullYear()); // Get the year
console.log(newDate.getMonth()); // Get the month (0-11)
console.log(newDate.getMonth() + 1); // Get the month (1-12)
console.log(newDate.getDate()); // Get the day of the month (1-31)
console.log(newDate.getDay()); // Get the day of the week (0-6)
console.log(newDate.getHours()); // Get the hours (0-23)

// `{newDate.getDay()} and the time`

newDate.toLocaleString('defult', {
    weekday: 'long', // long, short, narrow
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
    day: 'numeric', // numeric, 2-digit
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    second: 'numeric', // numeric, 2-digit
    timeZoneName: 'short' // short, long
})
console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
})); // Format date and time in a readable way



