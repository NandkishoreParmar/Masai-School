

let num = [0,2,5,3,10]
console.log(num.sort());    // sorting based on ascii value 
// output  = [0,10,2,3,5]

// compare function 
// function compare(a,b){
//     return a-b   // ascending
//     return b-a   // descending
// }

// a-b -> negative number -> a is placed before b
// a-b -> positive number -> b is placed before a 
// a-b -> zero  -> no change in position


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

num.sort(function(a,b){
    return a-b
})
console.log(num);

num.sort(function(a,b){
    return b-a
})
console.log(num);

console.log("+++++++++++++++++++++++++++string+++++++++++++++++++++++++++++");

let animals = ["cat","dog","elephant","bee", "ant"]
animals.sort()  // ascending
console.log(animals);
// animals.reverse()
// console.log(animals);

// for descending order 
animals.sort(function(a,b){
    if (a>b)  return -1
    if (a<b)  return 1
    return 0
})
console.log(animals);



console.log("+++++++++++++++++++++++++++object+++++++++++++++++++++++++++++");

const user = [
    {name: "Nandkishore" , age:24 },
    {name: "Pankaj", age: 23},
    {name: "Gourav", age: 22}
]

user.sort(function(a,b){
    return a.age - b.age
})
console.log(user);

// sort for numbers in descending 
// num.sort(function(a,b){
//     return b-a
// })

//sort string in descending order
// animals.sort(function(a,b){
//     if (a>b)  return -1
//     if (a<b)  return 1
//     return 0
// })

