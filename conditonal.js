// Conditional Statements => if, if else, nested, ladder, switch, ternory(?:)
/*
    if(condition){
        statemetns...
    }else{
        statemetns...
    }
*/

// two number find out min number.

// let x = 105,
//   y = 20;

// if (x > y) {
//   console.log("Y is Smllar than X");
// }else{
//     console.log("X is Smllar than Y");
// }

// condition ? true : false

// x > y ? console.log("Y is small number.") : console.log("x is small number")
// console.log("Small number is: ", x>y ? y : x);

// a ,b ,c => max number (nested)

// let a = 100,
//   b = 505,
//   c = 300;

// if(a > b){
//     if(a > c){
//         console.log("A is large number");
//     }else{
//         console.log('C is large number')
//     }
// }
// else{
//     if(b > c){
//         console.log("B is Max number");
//     }else{
//         console.log('C is Max number')
//     }
// }

// a > b
//   ? a > c
//     ? console.log("A")
//     : console.log("C..")
//   : b > c
//   ? console.log("B")
//   : console.log("C");

// Ladder if else

// if (a > b && a > c) {
//   console.log("A is large number");
// } else if (b > c) {
//   console.log("B is Max number");
// } else {
//   console.log("C is Max number");
// }

// Number("105") => 105

// let per = Number(prompt("Enter Percentage: "))

// if(per >= 90){
//     console.log("Congratulation You Passed!!!!! With Grade A++")
// }else if(per >=75){
//     console.log("Congratulation You Passed!!!!! With Grade B++")
// }else if(per >=55){
//     console.log("You Passed!!!!! With Grade C++")
// }else if(per >=35){
//     console.log("You Passed*****")
// }else{
//     console.log(" 😎 Better luck Next Time !!!!!! 😎");
// }



// Switch => Menu-driven
let a = 100, b = 20, choice;
choice = prompt("Enter your choice: ");
switch(choice){
    case "1":
        console.log("addtion of a and b is: ", a + b);
        break
    case "2":
        console.log("Substraction of a and b is: ", a - b);
        break
    case "3":
        console.log("Multiplication of a and b is: ", a * b);
        break
    case "4":
        console.log("Division of a and b is: ", a / b);
        break
    default:
        console.log("Wrong Choice....");
        break
}