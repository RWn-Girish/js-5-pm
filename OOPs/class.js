// Class (state => variable, behaviour => method) & Object


class Test {
    name = "John Peter";
    age = 25; 

    display(a){
       return ("Display function Called " + this.name);
    }
}


let obj = new Test();

// console.log(obj);
// console.log(obj.age);
// console.log(obj.name);
console.log(obj.display("jolly"));