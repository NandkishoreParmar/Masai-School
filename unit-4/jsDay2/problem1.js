function doubleNumbers(input) {
    // Convert the input string to an array of numbers
    const numbers = input.split(' ').map(Number);
  
    // Use map to double each number
    const doubled = numbers.map(num => num * 2);
  
    return doubled;
  }
  
  // Example usage
  const input = "1 2 3 4";
  console.log(doubleNumbers(input)); // Outputs: [2, 4, 6, 8]

  
  function doubleNumbers(input) {
    if (input.trim() === '') {
      return [];
    }
  
    const numbers = input.split(' ').map(Number);
    
    if (numbers.some(isNaN)) {
      console.log(
      ('Invalid input: please enter numbers separated by spaces.'))
    }
  
    const doubled = numbers.map(num => num * 2);
    return doubled;
  }
  
  // Example usage with error handling
  try {
    const input1 = "1 2 3 4";
    console.log(doubleNumbers(input1)); // Outputs: [2, 4, 6, 8]
  } catch (error) {
    console.error(error.message);
  }

  
  function filterEvenNumbers(input) {
    // Convert the input string to an array of numbers
    const numbers = input.split(',').map(Number);
  
    // Use filter to extract even numbers
    const evens = numbers.filter(num => num % 2 === 0);
  
    return evens;
  }
  
  // Example usage
  const input2 = "1, 2, 3, 4, 5";
  console.log(filterEvenNumbers(input2)); // Outputs: [2, 4]
  

  function filterEvenNumbers(input) {
    if (input.trim() === '') {
      return [];
    }
  
    const numbers = input.split(',').map(Number);
    
    if (numbers.some(isNaN)) {
      console.log(
      ('Invalid input: please enter integers separated by commas.'))
    }
  
    const evens = numbers.filter(num => num % 2 === 0);
    return evens;
  }
  
  // Example usage with error handling
  try {
    const input3 = "1, 2, 3, 4, 5";
    console.log(filterEvenNumbers(input3)); // Outputs: [2, 4]
  } catch (error) {
    console.error(error.message);
  }

  
  function sumNumbers(input) {
    // Convert the input string to an array of numbers
    const numbers = input.split(';').map(Number);
  
    // Use reduce to calculate the sum of the numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0);
  
    return sum;
  }
  
  // Example usage
  const input4 = "5; 10; 15";
  console.log(sumNumbers(input)); // Outputs: 30

  
  function sumNumbers(input4) {
    if (input.trim() === '') {
      return 0;
    }
  
    const numbers = input.split(';').map(Number);
    
    if (numbers.some(isNaN)) {
      console.log(
      ('Invalid input: please enter numbers separated by semicolons.'))
    }
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum;
  }
  
  // Example usage with error handling
  try {
    const input = "5; 10; 15";
    console.log(sumNumbers(input)); // Outputs: 30
  } catch (error) {
    console.error(error.message);
  }
  