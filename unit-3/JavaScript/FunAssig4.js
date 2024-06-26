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
  
  // Problem 10: countCalculation using multilevel destructuring
//   console.log(countCalculation(school))
//  Output: {  
//   mathTeachersCount: 5,
//   historyTeachersCount: 3,
//   mathStudentsCount: 150,
//   historyStudentsCount: 100
// }

  function countCalculation(school) {
    const { math: mathTeachersCount, history: historyTeachersCount } = school.departments;
    const { math: mathStudentsCount, history: historyStudentsCount } = school.departments;
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
  }
  
  console.log(countCalculation(school));
  
  // Problem 11: findTopStudent using multilevel destructuring
  function findTopStudent(school, courseName) {
    const topStudent = school.students.find((student) => Math.max(...Object.values(student.scores)) === student.scores[courseName]);
    return topStudent;
  }
  
  console.log(findTopStudent(school, 'math'));
  
  // Problem 12: addNewDept using spread operator
  function addNewDept(school, newDepartment) {
    return {
      ...school,
      departments: {
        ...school.departments,
        [newDepartment.name]: newDepartment,
      },
    };
  }
  
  const newDepartment = { art: { teachers: 2, students: 50 } };
  console.log(addNewDept(school, newDepartment));
  
  // Problem 13: highestStudentCountDepartment
  function highestStudentCountDepartment(school) {
    const departmentEntries = Object.entries(school.departments);
    const maxStudents = Math.max(...departmentEntries.map(([dept, info]) => info.students));
    const highestCountDept = departmentEntries.find(([dept, info]) => info.students === maxStudents)[0];
    return highestCountDept;
  }
  
  console.log(highestStudentCountDepartment(school));
  
  // Problem 14: Greeting Message with default parameter
  const greetings = {
    English: "Hello, ",
    Spanish: "¡Hola, ",
    French: "Bonjour, ",
  };
  
  function generateGreeting(name, language = 'English') {
    return `${greetings[language]}${name}!`;
  }
  
  console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
  console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
  console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
  