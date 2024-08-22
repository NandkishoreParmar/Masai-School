// What is the concept ?

//     ES6 classes offer a syntactic sugar over the prototype - based inheritance system in JavaScript.They provide a clearer and more intuitive way to create objects and implement inheritance.
// Why is it useful ?

//     Classes streamline the process of creating objects and defining their behavior.They offer a more organized approach to object - oriented programming, enhancing code readability and maintainability.
//         Real - world examples or analogies:

// Think of an ES6 class as a blueprint for constructing various instances of an object, similar to how a template in a manufacturing plant guides the creation of multiple products with consistent features.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.fullName = function() {
        console.log(this.name);
       }
    }
}

let User1 = new User("Alice", 20);
let User2 = new User("Bob", 22);

console.log(student1);
student1.fullName();
console.log(student2);
