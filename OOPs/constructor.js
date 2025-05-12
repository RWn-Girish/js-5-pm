// Contructor => Special Method of Class
// when object is creating then automatically called constructor
// 1. Defualt   2. paramterized     3. Copy

class Test{
    // constructor() {
    //     console.log(" Defualt Constructor is called....");
    // }
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // console.log(" Defualt Constructor is called....", name, age);
    }

    sayHello(a) {
        console.log("Say Hello Method Called...", this.name);
    }
}

let obj = new Test("Rohit", 35);

obj.sayHello("Jolly Peter")

let data = new Test("Virat", 34);

data.sayHello("asdasd")


