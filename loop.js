// loop(Continue Statements) => for, while, do while, for in, for of

// entry controlled, exit controlled
/*
    for(init; condition; expression){
        statements....
    }

    init => only once
    condition => every time enter loop
    expression => every time exit loop

    i = 1     i<=5      i++
    1         1<=5  T   2
              2<=5  T   3
              3<=5  T   4
              4<=5  T   5
              5<=5  T   6
              6<=5  F

*/

// 1 to 5

// for(let i = 2; i<=50; i=i+2){
//     console.log(i);
// }


//  print even number
// for(let i = 1; i<=50; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


/*
    init
    while(condition){
        statements...
    }


    init
    do{
        statements...
    }while(condition)

*/

// let i = 1;

// while(i <= 25){
//     console.log(i);
//     i=i+2
// }



/*

let i = 1;

do{
    console.log(i);
    i++;
}while(i <= 5)

*/

// let i = 15;

// do{
//     console.log(i);
//     i++;
// }while(i <= 1)