/// factory function

function animal(noOfLegs,vegetarian){
    return {
    noOfLegs : noOfLegs,
    vegetarian: vegetarian,

    eat(){
        return "eating.."
    },
    greet(){
        return `Hi, I have ${noOfLegs} Legs.`
    }
}
}
let horse = animal(4,true)
console.log(horse);

console.log(horse.eat());
console.log(horse.greet());

// constructor
function Animal(noOfLegs,vegetarian){
    this.noOfLegs = noOfLegs,
    this.vegetarian = vegetarian,

    this.eat= function(){
        return "eating.."
    },
    this.greet=function(){
        return `Hi, I have ${noOfLegs} Legs.`
    }
}

let animals = new Animal(4,true)
console.log(animals);

console.log(animals.eat());
console.log(animals.greet());

// Class
class Animal1{
constructor(noOfLegs,vegetarian){
    this.noOfLegs = noOfLegs,
    this.vegetarian = vegetarian,

    this.eat= function(){
        return "eating.. animal1"
    },
    this.greet=function(){
        return `Hi, I have ${noOfLegs} Legs.`
    }
}
}

let animals1 = new Animal1(4,true)
console.log(animals1);

console.log(animals1.eat());
console.log(animals1.greet());


var person1 = {
    name: "John",
  };
  
  var person2 = {
    name: "Jill",
  };
  
  function printDetails(age, city) {
    console.log(
      this.name + " is " + age + " years old" + " and lives in " + city
    );
  }
  
  printDetails.call(person1, 28, "New york"); // John is 28 years old and lives in New york
  printDetails.call(person2, 32, "Bengaluru"); // Jill is 32 years old and lives in Bengaluru


  var person1 = {
    name: "John",
  };
  
  var person2 = {
    name: "Jill",
  };
  
  function printDetails(age, city) {
    console.log(
      this.name + " is " + age + " years old" + " and lives in " + city
    );
  }
  printDetails.apply(person1, [28, "Bangalore"]); // takes in the value of this keyword as the first argument; rest of the arguments to the function can be sent a an array of values