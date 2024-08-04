// function statements
// The function statement declares a function. A declared function is “saved for later use”, and will be executed later,
//  when it is invoked (called).


// javascript()     ---->we also call function before the declaration 
function javascript(){
    console.log("Welcome to js Function statements"); 
}

javascript()

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function expression
// expression()    --> we can not call function expression before the declaration 
let expression = function () {
    console.log("Welcome to Function Expression");
    
}
expression()


// Diff between function expression and function anonymous
// A function expression and an anonymous function are closely related concepts in JavaScript, but they are not exactly 
// the same. Let's explore the differences and relationships between them.

// Function Expression
// A function expression is a way to define a function in JavaScript where the function is assigned to a variable.
//  Function expressions can be named or anonymous.
//  const factorial = function fact(n) {
//     if (n <= 1) {
//       return 1;
//     } else {
//       return n * fact(n - 1);
//     }
//   };
//   console.log(factorial(5)); // Outputs: 120
  

//  Anonymous Function Expression
//  An anonymous function expression does not have a name. It is typically used in situations where the function is 
//  passed as an argument or used immediately.
 const greet = function() {
    console.log("Hello!");
  };
greet(); // Outputs: Hello!



console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


// CallBack Functions
// callback function is a function that is passed as an argument to another function and is executed after the first 
// function completes its task

function eatBreakFast(item, time, callBack){
    callBack()
    console.log(`I will eat ${item} as my breakfast at ${time}`);
}

function callBack(){
    console.log("First Brush Your teeth");
}

eatBreakFast("Dosa",9,callBack)







  

