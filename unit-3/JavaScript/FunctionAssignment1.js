
// 1.Function with Variables: Write a function subtract that takes two numbers as parameters and returns the 
// result of subtracting the second number from the first number. Ensure that the function only performs subtraction 
// if both parameters are numbers.
// Example Invocation: subtract(10, 5) Expected Output: 5
function subtraction(num1, num2) {
    // Check if both parameters are numbers using typeof operator
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 - num2;
    } else {
      return "Invalid input";
    }
  }
  
  const result = subtraction(10, 5); // Output: 5
  const invalidResult = subtraction("hello", 3);
  
  console.log(result);
  console.log(invalidResult);
  
// 2.Handling Null and Undefined: Create a function greet that takes a first name, last name, and age as parameters. 
// The function should return a greeting string mentioning the age of the person. Utilize template literals to compose 
// the string. Include a conditional statement to handle cases where the age might not be available (i.e., undefined).
// Example Invocation: greet("John", "Doe", 30) Expected Output: "John Doe's age is 30."
function greet(firstName, lastName, age) {
    // Use template literals for string composition
    let greeting = `${firstName} ${lastName}`;
  
    // Check if age is defined (not null or undefined)
    if (age !== undefined) {
      greeting += `'s age is ${age}.`;
    } else {
      greeting += '.';
    }
  
    return greeting;
  }
  
  const fullName = greet("John", "Doe", 30); // Output: "John Doe's age is 30."
  const unknownAge = greet("Jane", "Doe"); // Output: "Jane Doe."
  
  console.log(fullName);
  console.log(unknownAge);
  
//  3. Utilizing Template Literals: Write a function interpolate that takes two numbers as parameters and returns a 
// string with the sum of the numbers formatted as an equation. Use logical operators to ensure that both inputs are 
// numbers.
//   Example Invocation: interpolate(5, 3) Expected Output: "5 + 3 = 8"
  function interpolate(num1, num2) {
    // Check if both parameters are numbers using isNaN function
    if (!isNaN(num1) && !isNaN(num2)) {
      const sum = num1 + num2;
      // Use template literals and logical operators (&&) to format the equation
      return `${num1} + ${num2} = ${sum}`;
    } else {
      return "Invalid input";
    }
  }
  
  const equation = interpolate(5, 3); // Output: "5 + 3 = 8"
  const invalidEquation = interpolate("hello", 3); 
  
  console.log(equation);
  console.log(invalidEquation);
  