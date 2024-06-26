// Combining Arrays
function combiningArrays(fruits, vegetables) {
    const groceries = [...fruits, ...vegetables]; // Combine fruits and vegetables using spread operator
    return groceries;
  }
  
  const fruits = ["apple", "banana", "orange"];
  const vegetables = ["carrot", "broccoli", "spinach"];
  console.log(combiningArrays(fruits, vegetables)); // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]
  
  
  // Cloning Objects
  function cloningObjects(person) {
    const personCopy = { ...person }; // Clone person object using spread operator
    return personCopy;
  }
  
  const person = { name: "John", age: 30, address: "123 Main St" };
  console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }
  
  
  // Merging Objects
  function mergingObjects(student, course) {
    const studentWithCourse = { ...student, ...course }; // Merge student and course objects using spread operator
    return studentWithCourse;
  }
  
  const student = { name: "Alice", age: 20 };
  const course = { courseName: "Math", teacher: "Mr. Smith" };
  console.log(mergingObjects(student, course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }
  
  
  // Combining Nested Arrays
  function combiningNestedArrays(array1, array2) {
    const combinedArray = [...array1, ...array2]; // Combine outer arrays using spread operator
    return combinedArray;
  }
  
  const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];
  console.log(combiningNestedArrays(array1, array2)); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
  