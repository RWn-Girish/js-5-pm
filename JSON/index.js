// JSON => JavaScript Object Notation

// let person = {
//     name: "John Peter",
//     age: 25,
//     email: "john@test.in"
// }

// console.log(person);
// console.log(person.name);


// let data = {
//     "name" : "Rohit Sharma",
//     "age" : 35,
//     "email" : "rohit@test.in",
//     "test-retirement" : "07-05-2025" 
// }

// console.log(data);
// console.log(data.name);


// JavaScript => JSON

// let person = {
//     name: "John Peter",
//     age: 25,
//     email: "john@test.in"
// }

// console.log(person);

// let data = JSON.stringify(person);

// console.log(data);

// JSON => JavaScript

let data = '{"name" : "Kohli", "age":34, "email":"virat@test.in", "hobbie": ["Reading", "Music", "Dancing"]}'
console.log(data);
let person = JSON.parse(data)
console.log(person)