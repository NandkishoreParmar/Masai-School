// Employee Information using Destructuring
function employeeInformation(employees1) {
    const [ , { name: secondEmployeeName, department: secondEmployeeDepartment }] = employees1;
    return { secondEmployeeName, secondEmployeeDepartment };
  }
  
  const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(employeeInformation(employees1)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }
  
  
  // Average Salary using Destructuring
  function averageSalary(employees2) {
    let totalSalary = 0;
    for (const { salary } of employees2) {
      totalSalary += salary;
    }
    return totalSalary / employees2.length;
  }
  
  const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(averageSalary(employees2)); // Output: 60000
  
  
  // Third Employee Info with Bonus Calculation
  function thirdEmployeeInfo(employees3) {
    const [,, { name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary }] = employees3;
    const bonus = thirdEmployeeSalary * 0.1;
    return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus}`;
  }
  
  const employees3 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(thirdEmployeeInfo(employees3)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"
  