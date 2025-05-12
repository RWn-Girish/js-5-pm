// Function => Perform to Specific task


// // function describe
// function greeting() {
//    console.log("Hello Guys....");
// }

// greeting();     // function called

// two number find min number

// function hoisting

// minNumber();

// function minNumber() {
//     let a= 109, b = 250;
//     if(a < b){
//         console.log("Min number: ",a);
//     }else{
//         console.log("Min number: ",b);
//     }
// }


// 4 types of Functions => NANR, NAWR, WANR, WAWR

// NO Argument NO Return
// function add() {
//     let a = 15, b = 26;
//     console.log("Addition of a and b is: ", a + b);
// }

// add();



// NO Argument With Return

// function product() {
//     let x = 5, y = 15;
//     let a;
//     a = x * y
//     return a;
// }

// let t = product();
// console.log(t);
// console.log(product());


// With Arguemnt No Return
// function addition(a, b, c = 152){
//     let total;
//     total = a + b + c
//     console.log("Total is: ", total);
// }

// addition(15, 25)


// With Argument With Return

function addition(a,b){
    let total = a + b;
    return total;
}

console.log(addition(15,36));