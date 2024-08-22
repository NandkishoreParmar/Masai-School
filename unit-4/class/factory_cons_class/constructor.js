// What is the concept? - A constructor function is a function used to create and initialize objects. It is called with the new keyword to create new instances of objects based on its blueprint.
// Why is it useful? - Constructor functions provide a convenient way to create multiple instances of objects with consistent properties and behaviors. They encapsulate object creation logic and promote code reusability.
// Real-world examples or analogies - Think of a constructor function as a mold in a factory that is used to create multiple copies of a product with the same design.
// Code Implementation | Examples

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.printHello = function() {
    console.log("Hello...");
};

function Student(name, age, batchno) {
    User.call(this, name, age); // Copy properties from User

    this.batchno = batchno; // Add additional property batchno
}

// copy methods from User
Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

let student1 = new Student("Pavan", 26, "BatchA");
let student2 = new Student("Roshan", 30, "BatchB");

console.log(student1);
student1.printHello(); //  method from User
console.log(student2);


