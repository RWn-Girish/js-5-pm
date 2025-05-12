// Object => Everything is Object
// key: value(string, number, boolean, null, undefined, function, array, object)
// let data = new Object()

// let data = {
//     name: "John Peter",
//     age: 25,
//     email: 'john@test.in',
//     indian: false,
//     sayHello: function () {
//         console.log("Hello Guys....");
//     }
// }
// data.sayHello()
// console.log(data);
// console.log(typeof data);

// propertry access two method => 1. Dot(.) Method 

// console.log(data.email)
// console.log(data.age)
// console.log(data.hello)

// 2. ['key']
// console.log(data['name'])
// console.log(data['indian'])

// data.name = "Rohit Sharma";
// data['hello'] = 101;

// delete data.age;

// console.log(data);


// console.log(data.hasOwnProperty('sayHello'));
// console.log(Object.keys(data));
// console.log(Object.values(data));



// let data = {
//     name: "John Peter",
//     age: 25,
//     email: 'john@test.in',
//     indian: false,
//     hobbies: ['Reading', 'Music', 'Dancing'],
//     address: {
//         line1: "Royal",
//         line2: "Sarthana",
//         city: "Surat",
//         pincode: 395006
//     }
// }

// console.log(data.hobbies);
// console.log(data.hobbies[0]);
// console.log(data['hobbies']);
// console.log(data['hobbies'][0]);

// console.log(data.address)
// console.log(data.address.city)


// for in (object ,array) , for of(array)


// for(let i in data.hobbies){
//     console.log(i, " ", data.hobbies[i]);
// }

// for(let i in data){
//     console.log(i, " ", data[i]);
// }


// for(let i of data.hobbies){
//     console.log(i);
// }