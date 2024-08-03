// 1. push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array. 
// It's like adding items to the end of a shopping cart.
// Array.push(item1,item2,....itemN)
// Example:

let fruits = ['apple', 'banana'];
fruits.push('orange',"mango",'kiwi');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++1");

// 2. The pop() method removes the last element from an array and returns that element. It's like removing the last item from a to-do list.

// Example:

let fruits1 = ['apple', 'banana', 'orange'];
let removedFruit = fruits1.pop();
console.log(removedFruit); // Output: 'orange'
console.log(fruits1); // Output: ['apple', 'banana']


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++2");

// 3. shift()
// The shift() method removes the first element from an array and returns that element. It also updates the indexes 
// of the remaining elements. It's like removing the first person from a line.

// Example:

let fruits2 = ['apple', 'banana', 'orange'];
let removedFruit1 = fruits2.shift();
console.log(removedFruit1); // Output: 'apple'
console.log(fruits2); // Output: ['banana', 'orange']

// Use case: Removing the first item from a queue.



console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++3");


// 4. unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. 
// It also updates the indexes of the existing elements. It's like adding new people to the front of a line.

// Example:

let fruits4 = ['apple', 'banana'];
fruits4.unshift('orange');
console.log(fruits4); // Output: ['orange', 'apple', 'banana']
console.log(fruits4[0]);
// Use case: Adding new items to the beginning of a list.

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++4");


// 5. concat()
// The concat() method combines two or more arrays and returns a new array. It's like merging multiple lists into one.


// Example:

let fruits5 = ['apple', 'banana'];
let moreFruits = ['orange', 'grape'];
let allFruits = fruits5.concat(moreFruits);
console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Use case: Merging multiple arrays into one.

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++5");

// 6. slice()
// The slice() method extracts a section of an array and returns a new array. It takes two arguments:
//  the start index (inclusive) and the end index (exclusive). It's like cutting out a specific portion from a cake.

// Example:

let fruits6 = ['apple', 'banana', 'orange', 'grape'];
let citrusFruits = fruits6.slice(1, 3);
console.log(citrusFruits); // Output: ['banana', 'orange']

// Use case: Selecting a specific range of elements from an array.


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++6");
// 7. indexOf()
// The indexOf() method returns the first index at which a given element can be found in an array, or -1 if it is not present. It's like finding the position of a specific item in a grocery list.

// Example:

let fruits7 = ['apple', 'banana', 'orange'];
let indexOfBanana = fruits7.indexOf('banana');
console.log(indexOfBanana); // Output: 1

// Use case: Finding the position of a specific item in an array.

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++7");
// 8. includes()
// The includes() method checks if an array includes a certain element and returns true or false.
//  It's like checking if a specific ingredient exists in a recipe.
// incudes take two parameters includes(ele,index)

// Example:

let fruits8 = ['apple', 'banana', 'orange'];
let includesBanana = fruits8.includes('banana');       
console.log(includesBanana); // Output: true

// Use case: Checking if a value exists in an array.

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++8");
// 9. join()
// The join() method joins all elements of an array into a string, using a specified separator. 
// It's like creating a comma-separated list from a list of items.

// Example:

let fruits9 = ['apple', 'banana', 'orange'];
let fruitString = fruits9.join(', ');
console.log(fruitString); // Output: 'apple, banana, orange'

// Use case: Creating a comma-separated list from an array.

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++9");


// 10. reverse()
// The reverse() method reverses the order of the elements in an array. It's like flipping a deck of cards.

// Example:

let fruits10 = ['apple', 'banana', 'orange'];
fruits10.reverse();
console.log(fruits10); // Output: ['orange', 'banana', 'apple']

// Use case: Reversing the order of elements in an array.

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++10");


// 11. splice()
// The splice() method changes the contents of an array by removing, replacing, or adding elements. 
// It takes three parameters: the start index, the number of elements to remove, and optional elements to add.
//  It's like modifying a specific portion of an array.

// Example:

let fruits11 = ['apple', 'banana', 'orange', 'grape'];
fruits11.splice(1, 2, 'kiwi', 'mango');
console.log(fruits11); // Output: ['apple', 'kiwi', 'mango', 'grape']

// Use case: Modifying specific elements within an array.

// The splice() method is a powerful tool for manipulating arrays and allows for flexible modifications to the array's content.
// Splitting an Array into Multiple Arrays:
// By using splice() creatively, you can split an array into multiple arrays based on certain conditions or criteria.

// Use Case: Let's say you have an array of mixed values, and you want to split it into separate arrays for numbers and strings:

let mixedArray = [1, 'apple', 2, 'banana', 3, 'orange'];
let numbersArray = mixedArray.splice(0, mixedArray.findIndex(item => typeof item !== 'number'));
console.log(numbersArray); // Output: [1]
console.log(mixedArray); // Output: ['apple', 2, 'banana', 3, 'orange']
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++11");






console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");