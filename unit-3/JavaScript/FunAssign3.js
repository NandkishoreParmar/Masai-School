// Problem 1: Factorial Calculation
// Write a function calculateFactorial that takes a positive integer as input and returns its factorial. 
// Ensure that the function handles invalid inputs gracefully.

// Example:

// console.log(calculateFactorial(5)); // Expected Output: 120
function calculateFactorial(n) {
    if (typeof n !== 'number' || n < 0) {
      return "Please enter valid Number"; // Handle non-positive numbers and non-numeric input
    }
  
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;

}
console.log(calculateFactorial("rahul"))
console.log(calculateFactorial(5))
console.log(calculateFactorial(-5))


// 2.//Problem 2: Prime Number Checker
// Implement a function isPrime that takes a positive integer as input and returns true if the number is prime, and false otherwise. 
// Utilize logical operators and looping constructs efficiently.

// Example:
// console.log(isPrime(7)); // Expected Output: true
// console.log(isPrime(10)); // Expected Output: false

function isPrime(n) {
    if (typeof n !== 'number' || n <= 1) {
      return false; // Handle non-positive numbers and non-numeric input
    }
    if (n <= 3) {
      return true; // Handle base cases (2 and 3 are prime)
    }
    if (n % 2 === 0 || n % 3 === 0) {
      return false; // Exclude multiples of 2 and 3
    }
    // Check divisibility up to n-1 (less efficient)
    for (let i = 4; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(7))
  console.log(isPrime(10))

  //3.///
//   Problem 3: Longest Palindrome in Array
// Write a function findLongestPalindrome that takes an array of strings as input and returns the longest palindrome string found in the array. If no palindrome is found, return an appropriate message.

// Example:

// var strings = ["level", "noon", "hello", "racecar", "JavaScript"];
// console.log(findLongestPalindrome(strings)); // Expected Output: "racecar"
  function findLongestPalindrome(arr) {
    if (!Array.isArray(arr)) {
      return ("Input must be an array");
    }
  
    let longestPalindrome = "";
    for (let i = 0; i < arr.length; i++) {
      const str = arr[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
      const reversedStr = str.split("").reverse().join("");
      if (str === reversedStr && str.length > longestPalindrome.length) {
        longestPalindrome = str;
      }
    }
    return longestPalindrome || "No palindrome found"; // Return stored palindrome or message
  }
  let arr = ["level", "noon", "hello", "racecar", "JavaScript"]
  console.log(findLongestPalindrome(arr))
  let arr1 = "hello"
  console.log(findLongestPalindrome(arr1))


//   4Problem 4: Unique Characters Counter
// Create a function countUniqueCharacters that takes a string as input and returns the count of unique characters present in the string.
//  Ignore case sensitivity while counting.

// Example:

// console.log(countUniqueCharacters("Hello World")); // Expected Output: 7 (H, e, l, o, W, r, d)

function countUniqueCharacters(str) {
    if (typeof str !== 'string') {
      return ("Input must be a string");
    }
    const charSet = new Set();
    for (let char of str.toLowerCase()) {
      charSet.add(char);
    }
    return charSet.size;
  }
  console.log(countUniqueCharacters("hello world"))