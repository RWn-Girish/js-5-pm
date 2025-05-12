// inheritance => single, multilevel, hierarchical, multiple, hybrid

// Single Inheritance
// class Parent {
//     constructor(a) {
//         this.a = a;
//         console.log("Parent Construtor...");
//     }

//     sayParent() {
//         console.log("parent Class called");
//     }
// }


// class Child extends Parent {
//     constructor(n) {
//         super(n);
//         console.log("Child Construtor...");
//     }
//     sayChild() {
//         this.sayParent();
//         console.log("Child Class Called...!", this.a);
//     }
// }


// let obj = new Child(1500);

// // obj.sayParent()
// obj.sayChild();


// Multilevel
// class ABC{
//     sayA() {
//         console.log("Class A Called");
//     }
// }
// class PQR extends ABC{
//     sayB() {
//         console.log("Class B Called");
//     }
// }

// class XYZ extends PQR{
//     sayC() {
//         console.log("Class C Called");
//     }
// }

// let obj = new XYZ();

// obj.sayA()
// obj.sayB()
// obj.sayC()


// hierarchical

class ABC{
    sayA() {
        console.log("Class ABC Called");
    }
}
class PQR extends ABC{
    sayB() {
        console.log("Class B Called");
    }
}
class XYZ extends ABC{
    sayC() {
        console.log("Class C Called");
    }
}


// let a = new PQR();
// a.sayA()
// a.sayB()

let b = new XYZ();
b.sayA();
b.sayC();