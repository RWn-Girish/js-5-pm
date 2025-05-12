/*
    1 1 1 1 1
    2 2 2 2 2
    3 3 3 3 3
    4 4 4 4 4
    5 5 5 5 5


    for(let i = 1 ; i<=5; i++){
        for(let j = 1; j<=5; j++){
            console.log(i)
        }
    }

*/

// for(let i = 1 ; i<=5; i++){
//      let a = "";
//     for(let j = 1; j<=i; j++){
//         a = a + i + " "
//     }
//     console.log(a)
// }

// 1 1 2 3 5 8.....
// 1 4 12 32 80 

/*

    1 * 1 = 1
    2 * 2 = 4
    3 * 4 = 12
    4 * 8 = 32
    5 * 16 = 80
    6 * 32 = 192
    7 * 64 = 448

*/

// Armstrong number =>  1^3 + 2^3 + 3^3 = 123
// check number is palindrom number => original = reverse number (4859)

// let num = 12321;

// let original = num;
// let reverse = 0;

// while(num > 0){
//     let rem = num % 10
//     reverse = (reverse * 10) + rem;
//     num = Math.floor(num / 10)
// }


// if(original == reverse){
//     console.log("Number is Palindrome")
// }else{
//     console.log("Number is not Palindrome")
// }

// reverse number

// Armstrong Number

let num = 370; 

let original = num;
let reverse = 0;

while(num > 0){
    let rem = num % 10
    reverse = reverse  + rem ** 1;
    num = Math.floor(num / 10)
}


if(original == reverse){
    console.log("Number is Armstrong")
}else{
    console.log("Number is not Armstrong")
}