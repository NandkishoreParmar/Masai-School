const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
  

function countCalculation({departments:{math,history}}){
  const mathTeachersCount = math.teachers;
  const historyTeachersCount = history.teachers;
  const mathStudentsCount = math.students;
  const historyStudentsCount = history.students;

  return {
         mathTeachersCount,
         historyTeachersCount,
         mathStudentsCount,
         historyStudentsCount
  }
}

  console.log(countCalculation(school))
//  Output: {  
//   mathTeachersCount: 5,
//   historyTeachersCount: 3,
//   mathStudentsCount: 150,
//   historyStudentsCount: 100
// }
console.log("+++++++++++++++++++++++++++++++++++++++");


function findTopStudent(school, subject){
  let topStudent = null
  let highestScores = -1

  for (const student of school.students){
    const {name, className,scores} = student
    if (scores[subject] > highestScores){
      highestScores = scores[subject]
      topStudent = {name, className,scores}
    }
  }
  return topStudent
}

console.log( findTopStudent(school, 'math'))
// {
//   name: 'Alice',
//   className: 'Grade 5',
//   scores: { math: 95, science: 88, history: 85, english: 92 }
// }


console.log("+++++++++++++++++++++++++++++++++++++++++");


function addNewDept(school, newDepartment) {
  // Merge the new department into the existing departments
  const updatedDepartments = { ...school.departments, ...newDepartment };

  // Return the updated school object with the new departments
  return {
    ...school,
    departments: updatedDepartments
  };
}

const newDepartment = { art: { teachers: 2, students: 50 } };

console.log(addNewDept(school,newDepartment))

// Output = {
//   name: 'XYZ School',
//   establishYear: 1990,
//   departments: {
//     math: { teachers: 5, students: 150 },
//     science: { teachers: 4, students: 120 },
//     history: { teachers: 3, students: 100 },
//     english: { teachers: 4, students: 130 },
//     art: { teachers: 2, students: 50 }
//   },
//   courses: [ 'math', 'science', 'history', 'english' ],
//   students: [
//     { name: 'Alice', className: 'Grade 5', scores: [Object] },
//     { name: 'Bob', className: 'Grade 4', scores: [Object] },
//     { name: 'Charlie', className: 'Grade 5', scores: [Object] },
//     { name: 'Diana', className: 'Grade 4', scores: [Object] }
//   ]
// }

console.log("++++++++++++++++++++++++++++++++++++++++++++++");


function highestStudentCountDepartment(school) {
  const { departments } = school;
  let highestCount = 0;
  let highestDept = '';

  for (const [department, info] of Object.entries(departments)) {
    if (info.students > highestCount) {
      highestCount = info.students;
      highestDept = department;
    }
  }

  return highestDept;
}

console.log(highestStudentCountDepartment(school)); // Outputs: math


console.log("+++++++++++++++++++++++++++++++++++");

function generateGreeting(name, language = "English") {
  let greeting;

  switch (language) {
    case "Spanish":
      greeting = `¡Hola, ${name}!`;
      break;
    case "French":
      greeting = `Bonjour, ${name}!`;
      break;
    case "English":
    default:
      greeting = `Hello, ${name}!`;
      break;
  }

  return greeting;
}

console.log(generateGreeting("Alice")); // Outputs: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Outputs: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Outputs: "Bonjour, Charlie!"




