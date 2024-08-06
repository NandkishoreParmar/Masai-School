// Function to sort students by a given condition
function sortStudentsByCondition(students, conditionFn) {
    return students.slice().sort(conditionFn);
  }
  
  // Example usage
  const students = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 23 },
    { name: "David", age: 20 }
  ];
  
  // Condition function: Sort by age in descending order
  function sortByAgeDescending(a, b) {
    return b.age - a.age;
  }
  
  // Sorting the students using the custom condition function
  const sortedStudents = sortStudentsByCondition(students, sortByAgeDescending);
  console.log(sortedStudents);
  // Output should be:
  // [
  //   { name: "Charlie", age: 23 },
  //   { name: "Alice", age: 21 },
  //   { name: "David", age: 20 },
  //   { name: "Bob", age: 19 }
  // ]
  
  // Additional Test Scenarios
  
  // Condition function: Sort by name in ascending order
  function sortByNameAscending(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }
  
  const sortedByName = sortStudentsByCondition(students, sortByNameAscending);
  console.log(sortedByName);
  // Output should be:
  // [
  //   { name: "Alice", age: 21 },
  //   { name: "Bob", age: 19 },
  //   { name: "Charlie", age: 23 },
  //   { name: "David", age: 20 }
  // ]
  
  // Condition function: Sort by age in ascending order
  function sortByAgeAscending(a, b) {
    return a.age - b.age;
  }
  
  const sortedByAgeAscending = sortStudentsByCondition(students, sortByAgeAscending);
  console.log(sortedByAgeAscending);
  // Output should be:
  // [
  //   { name: "Bob", age: 19 },
  //   { name: "David", age: 20 },
  //   { name: "Alice", age: 21 },
  //   { name: "Charlie", age: 23 }
  // ]
  