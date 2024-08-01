

function employeesInDepartment(employees,department){
        const filteredEmployees = employees.filter(employee => employee.department === department);
    
        return filteredEmployees.map(employee => employee.name);
      }

//Example Invocation:
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];
  
  console.log(employeesInDepartment(employees, "Finance")); // Output: ['Jane Smith', 'Maria Lopez']


//   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function totalSalaryByDepartment(employees, department) {
    return employees
      .filter(employee => employee.department === department)
      .reduce((totalSalary, employee) => totalSalary + employee.salary, 0);
  }

//Example Invocation:
const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];
  
  console.log(totalSalaryByDepartment(employees1, "Finance")); // Output: 125000
  

//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function employeeSummary(employees) {
    return employees.map(employee => {
      return `Employee ${employee.name} works in ${employee.department} department and earns $${employee.salary} annually.`;
    });
  }

  
//Example Invocation:
const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];
  
  console.log(employeeSummary(employees2));
  // Output: [
  //   "Employee John Doe works in HR department and earns $50000 annually.",
  //   "Employee Jane Smith works in Finance department and earns $60000 annually.",
  //   "Employee Alex Johnson works in IT department and earns $70000 annually.",
  //   "Employee Maria Lopez works in Finance department and earns $65000 annually."
  // ]
  
  
    
  