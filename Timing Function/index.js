// SETTIMEOUT , SETINTERVAL, clearTimeout, clearInterval
/*
    setTimeOut(()=> {
    }, miliseconds)

*/

// console.log("Red & White");
// let a = 11,b = 25;
// let id = setInterval(()=> {
//     console.log("Addition of a and b is: ", a + b);
// }, 3000);

// console.log("SetTimeOut Id: ", id);

// // // clearTimeout(id);
// clearInterval(id);

// console.log("JavaScript Batch");


// Digital Watch
// setInterval(()=> {
//     let date = new Date();
//     document.querySelector('h3').innerHTML = date.toLocaleTimeString()
// console.log();
// }, 1000)


let count = 15
let id = setInterval(()=> {
    
    if(count<=0){
        alert('Count Value Zero');
        clearInterval(id);
    }
    document.querySelector('h3').innerHTML = count;
    count--;
console.log();
}, 1000)