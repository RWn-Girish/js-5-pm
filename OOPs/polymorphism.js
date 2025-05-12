// polymorphism => poly = many, morphism = convert into one form to another form
// types => method overriding, method overloading


class Animal{
    barking() {
        console.log("Bakring Method....");
    }
}

class Dog extends Animal{
    barking() {
        // super.barking()
        console.log("Hoooo hoooo hoooooooooo");
    }
}

class Cat extends Animal{
    barking() {
        console.log("Meoow Meoow Meoowwwwwwww");
    }
}

let d = new Dog();

d.barking();