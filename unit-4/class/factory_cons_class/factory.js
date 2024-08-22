// Let’s say a bank has to create accounts of 90 Lakh customers.

// Is it feasible to keep writing like this ? Is is scalable ?
   // grouping related variables
   let account1 = {
    accountNumber : 12092903490,
    name: 'Vivek',
    type: 'Simple Saving',
    balance: 100000,
    active: true,
  }
  let account2 = {
    accountNumber : 120923208900,
    name: 'Samuel',
    type: 'Current',
    balance: 300000,
    active: true,
  }
  let account3 = {
    accountNumber : 1209382692610,
    name: 'Aslam',
    type: 'Current',
    balance: 150000,
    active: true,
  }
//   ....



function account(accountNumber,name,type,balance,active){
    let accountDetails = {};
  
    accountDetails.accountNumber = accountNumber;
    accountDetails.name = name;
    accountDetails.type = type;
    accountDetails.balance = balance;
    accountDetails.active = active;
  
      accountDetails.printAccountDetails = function () {
      console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Bal: ', this.balance);
    }
  
    return accountDetails;
  }
  
  let vivekAccount = account(1290337843, 'Vivek', 'Savings', 90000, true)
  
  console.log(vivekAccount) 
  /*
  {
    accountNumber: 1290337843,
    name: 'Vivek',
    type: 'Savings',
    balance: 90000,
    active: true
  }
  */
  
//   Factory Function Example 2

// create a factory function Student that copy properties and methods from the User factory function and adds an additional property batchno.
function User(name, age) {
    let userObj = {};
    userObj.name = name;
    userObj.age = age;

    userObj.printHello = function() {
        console.log("Hello...");
    };

    return userObj;
}

function Student(name, age, batchno) {
    let studentObj = User(name, age); // get properties and methods from User

    studentObj.batchno = batchno; // Add additional property batchno

    return studentObj;
}

let student1 = Student("Pavan", 26, "BatchA");
let student2 = Student("Roshan", 30, "BatchB");

console.log(student1);
student1.printHello(); //  method from User
console.log(student2);


