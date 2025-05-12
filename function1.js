// Nested Function => laxical Scope => clouser concept

// function Greet(n) {
//     console.log("Good Afternoon...");

//     function hello(a) {
//         console.log("Hello Function Called....", n, a);
//     }

//     return hello;
// }

// let a = Greet();
// a();

// Greet(105)("Girish")


// variable as a function (anonymous function)
// let a = function (){
//     console.log("Variable is a Function....")
// }

// a()


// Arrow function (ES6)


// let add = (a) => ("Arrow Function "+ a)

// console.log(add(12))

// IIFE- Immeidatly Invoking Function Expression => no return


// (function(a){
//     console.log("IIFE", a);
// })(123)

// Callback Function

// function Test(callback){
//     console.log("Test Called...");
// // 
//     // callback()  // Hello
// }

// function Hello() {
//     console.log("Hello Called....");
// }

// Test(Hello);
