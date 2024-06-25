// 1. Object Factory Function: Write a function objectFactory that takes a first name 'fname' and an age 'age' as 
// parameters. The function should return an object with 'fname' as the key and 'age' as the value. Ensure that the 
// age is coerced to a number before being assigned to the object.
// Example Invocation: objectFactory("John", "25") Expected Output: { John: 25 }
function objectFactory(fname, age) {
    // Coerce age to a number
    const ageNumber = parseInt(age, 10); // Using parseInt with base 10
    //  console.log(ageNumber)
    // Create and return the object
    const obj = {
        [fname]: ageNumber
    };

    return obj;
}

// Example usage:
console.log(objectFactory("John", "25"),typeof objectFactory("John", "25") ); // Output: { John: 25 }


2.//Grade Classifier Function: Write a function gradeClassifier that takes a student's score 'score' out of 100 as
//  a parameter. The function should return a grade based on the score range. Include logical operators to handle
//   exceptional cases such as invalid input or score exceeding 100.
// Example Invocation: gradeClassifier(85) Expected Output: "B"
function gradeClassifier(score) {
    // Validate input: score should be a number between 0 and 100
    if (typeof score !== 'number' || score < 0 || score > 100 || isNaN(score)) {
        return "Invalid score. Please provide a number between 0 and 100.";
    }

    // Determine grade based on score range
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Example usage:
console.log(gradeClassifier(85)); // Output: "B"
console.log(gradeClassifier(101)); 
console.log(gradeClassifier(-5)); // Output: "Invalid score. Please provide a number between 0 and 100."
console.log(gradeClassifier("abc")); 

// 3.//String Manipulator Function: Write a function stringManipulator that takes two strings 'str1' and 'str2' as 
// parameters. The function should concatenate the strings if their lengths are equal; otherwise, it should append 
// the shorter string to the end of the longer string. Ensure both inputs are strings and handle cases where either or 
// both inputs are empty strings.
// Example Invocation: stringManipulator("hello", "world") Expected Output: "helloworld"
function stringManipulator(str1, str2) {
    // Validate inputs
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return "Both inputs should be strings.";
    }

    // Case where either string is empty
    if (str1.length === 0 || str2.length === 0) {
        return str1 + str2;
    }

    // Determine lengths
    const len1 = str1.length;
    const len2 = str2.length;

    // Concatenate or append based on lengths
    if (len1 === len2) {
        return str1 + str2;
    } else if (len1 > len2) {
        return str1 + str2;
    } else {
        return str2 + str1;
    }
}

// Example usage:
console.log(stringManipulator("hello", "world")); // Output: "helloworld"
console.log(stringManipulator("hello", "")); // Output: "hello"
console.log(stringManipulator("", "")); // Output: ""
console.log(stringManipulator(123, "world")); // Output: "Both inputs should be strings."


