// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// declaration let x;
// assignment x = 10

// Numbers 

let age = 27;
let price = 99.99;
let gpa = 2.1;

console.log(`You are ${age} years old.`)
console.log(`New mobile costs ${price} rupees.`)
console.log(`Your gpa is ${gpa}.`)

console.log(typeof age)
console.log(typeof price)
console.log(typeof gpa)


// Strings 
let firstName = 'Arun';
let favoriteFood = 'pizza'

console.log(typeof firstName)
console.log(`Hello ${firstName}`)
console.log(`My favorite food is ${favoriteFood}`)


// Booleans 
let online = true;
let forSale = false;

console.log(typeof online)
console.log(`Hello i am online : ${online}`)
console.log(`Is this car for sale : ${forSale}`)

// displaying contents in webpage 

let fullName = 'Arun Prasadh';
let myAge = 27;
let isStudent = false;

document.getElementById('p1').textContent = `Your name is ${fullName}`;
document.getElementById('p2').textContent = `Your age is ${age}`;
document.getElementById('p3').textContent = `Your student status is ${isStudent}`;