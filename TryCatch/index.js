// JS Error


// console.log("Red & White");
// console.log(b);

// let b = 101;
// console.log("Hello world");

try {

    console.log("Hello World");
    let a = 50, b;

    if(b == undefined){
        throw new Error("B ka Value mere pass abhi nahi he.")
    }
    let rem = a % b;

    console.log("Reminder is: ", rem);

} catch (error) {
    console.log("Err: ",error);
}