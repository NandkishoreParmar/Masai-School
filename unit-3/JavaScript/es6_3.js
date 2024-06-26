// Highest Paid Employee using Destructuring
function highestPaid(employees1) {
    return employees1.reduce((highestPaidSoFar, currentEmployee) => {
      return currentEmployee.salary > highestPaidSoFar.salary ? currentEmployee : highestPaidSoFar;
    }, employees1[0]); // Initialize with first employee as default
  }
  
  const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(highestPaid(employees1)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }
  
  
  // Destructuring to Swap Values
  function destructuringToSwap(employees) {
    const [firstEmployee, ...remainingEmployees] = employees;
    const lastEmployee = remainingEmployees.pop();
    return [lastEmployee, ...remainingEmployees, firstEmployee];
  }
  
  const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(destructuringToSwap(employees));
   // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]
  
  