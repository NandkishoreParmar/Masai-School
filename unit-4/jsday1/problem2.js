function employeeInformation(employees) {
    // if (employees.length < 2) {
    //   return {}; // Handle case where there are less than 2 employees
    // }
  
    const secondEmployee = employees[1];
    return {
      secondEmployeeName: secondEmployee.name,
      secondEmployeeDepartment: secondEmployee.department
    };
  }
  
  const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }
  

//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function averageSalary(employees1) {
    let totalSalary = 0;
    for (const { salary } of employees1) {
      totalSalary += salary;
    }
    return totalSalary / employees.length;
  }
  
  const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(averageSalary(employees1)); // Output: 60000
  

//   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function thirdEmployeeInfo(employees2) {
    // if (employees2.length < 3) {
    //   console.log("There are less than 3 employees.");
    //   return; // Handle case with less than 3 employees
    // }
  
    const [,, thirdEmployee] = employees2; // Destructure directly to get the third employee
    const { name, age, salary } = thirdEmployee; // Destructure properties from third employee object
    const bonus = (salary * 10) / 100;
  
    return (`Employee: ${name}, Age: ${age}, Salary: ${salary}, Bonus: ${bonus.toFixed(2)}`);
  }

//Example Invocation:

const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(thirdEmployeeInfo(employees2)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"
  