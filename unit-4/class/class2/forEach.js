let sweets = ["kova","jalebi","Barfi","laddu"]

for (let i = 0; i<sweets.length; i++){
    console.log(i,sweets[i]);
}

console.log("+++++++++++++++++++++++++++++++++");

// forEach can applied for arrays
// foreach takes three parameters   element, index, array        default first take element , second index, third array
sweets.forEach(function(ele,index,array){
    console.log(index,ele)
    // console.log(array);
}
)


console.log("+++++++++++++++++++++++++++++++++");
// using extra space we creating new array
let num = [1,2,3,4,5]
let space = []
num.forEach(function(ele){
    // console.log(ele*2);
    space.push(ele*2)
})
console.log(space)


console.log("+++++++++++++++++++++++++++++++++");
// objects 
const user = [
    {name: "Nandkishore" , age:24, },
    {name: "Pankaj", age: 23},
    {name: "Gourav", age: 22}
]
user.forEach(function(ele){
    console.log(ele);
    // console.log(ele.name, ele.age);
    
})