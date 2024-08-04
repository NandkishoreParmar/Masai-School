// Reduce 
let num = [2,1,3]
let sum = 0
for (let i=0; i < num.length; i++){
    sum = sum + num[i]
}
console.log(sum);

// filter, forEach and map takes 3 parameters(element,index,array)
// reduce takes 4 parameteres (accumulator,ele,index,array)


let res = num.reduce(function(acc,ele,index,array){
    return acc + ele
})

console.log(res);

// no initial value 
// first call -> acc = 2 , ele = 1 -> acc+ele = 3     acc = 3
// second call -> acc = 3 , ele = 3 -> acc + ele = 6  acc = 6 


// with initial value
let arr = [15,5,10,20]
let ans = arr.reduce(function(acc,ele){
    console.log(`ele :${ele}   acc :  ${acc}`);
    return acc + ele
},10)                   // 10 is accumulator initial value 
console.log(ans);

// first call -> acc = 10 , ele = 15 -> acc + ele = 25  acc = 25
// second call -> acc = 25 , ele = 5 - > acc + ele = 30   acc = 30
// third call -> acc = 30 , ele = 10 -> acc + ele = 40  acc = 40
// fourth call -> acc = 40 , ele = 20 -> acc + ele = 60  acc = 60

// for object
const user = [
    {name: "Nandkishore" , age:24 },
    {name: "Pankaj", age: 23},
    {name: "Gourav", age: 22}
]

let ageSum = user.reduce(function(acc,ele){
    return acc + ele.age
},0)
console.log(ageSum);




