// Array => Collection of elements 
// index => start with 0


// let arr = new Array();

// let arr = [11,22,33,44, 55];

// arr[0] = 150

// arr[10] = 15

// console.log(arr);

// console.log(arr.length)
// console.log(arr[0]);
// console.log(arr[10]);

// for(let i = 0; i<5; i++){
//     console.log(arr[i]);
// }


// Array Methods

// let data = [11,22,33,44,55];
// console.log(data)

// push => insert element into end position
// data.push(100);
// data.push(200);
// data.push(300, 400, 500);


// pop => remove element into last position
// data.pop()
// data.pop()

// unshift => insert element into first position
// data.unshift(100)
// data.unshift(200)
// data.unshift(300, 400, 500)

// shift => remove element into first position
// data.shift()
// data.shift()

// splice => add /remove element into any position
// data.splice(2, 0, 100)
// data.splice(2, 0, 300)
// data.splice(1, 3, 300,500,66)

// data.splice(1,1)



let data = [66,11,22,33,44,550];
console.log(data)

// includes => check element present or not
// console.log(data.includes(33))

// Array.isArray => array or not
// console.log(Array.isArray(data))

// findIndex, indexOf => find out index number of element
// console.log(data.indexOf(220))
// console.log(data.findIndex((ele)=> {
//     return  ele > 330
// }))


// filter => filter data 
// let res = data.filter((ele) => {
//     return ele <=30
// })
// console.log(res);

// every => check all ele satisfied or not
// let res = data.every((ele) => {
//     return ele <=300
// })
// console.log(res);

// some => check one ele satisfied or not
// let res = data.some((ele) => {
//     return ele >=300
// })
// console.log(res);



// forEach => iterate of array / no return

// data.forEach((ele, i)=> {
//     console.log(ele * 3);
// })

// map => return a new Array

// let res = data.map((ele) =>{
//     return ele * 3;
// })
// console.log(res);

// find => find out the element
// let res = data.find((ele)=> ele>=150);
// let resIndex = data.findIndex((ele)=> ele>=150);
// console.log(res);
// console.log(resIndex);
data.fill(-100)
console.log(data)
