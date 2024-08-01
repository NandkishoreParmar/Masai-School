
function combiningArr(fruits,vegetables){
    let groceries = []
    // groceries = fruits.concat(vegetables)
    // console.log(groceries)
    groceries = [...fruits,...vegetables]
    return groceries

}

const fruits = ["apple","banana","orange"]
const vegetables = ["carrot","broccoli","spinach"]
console.log(combiningArr(fruits,vegetables))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function cloningObjects(obj) {
    return { ...obj };
  }
  
  const person = { name: "John", age: 30, address: "123 Main St" };
  console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }

  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function mergingObjects(student,course){
    let studentwithcourse = []
    studentwithcourse = {...student,...course}
    return studentwithcourse
}
//Example Invocation:

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function combiningNestedArrays(array1,array2){
    let combinedArr = []
    combinedArr = [...array1,...array2]
    return combinedArr
}

//Example Invocation:

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
  

  

