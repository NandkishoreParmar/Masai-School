// filter 
let num = [1,2,3,4,5,6,7,8,9]

// filter  also takes three parameters   element, index, array        default first take element , second index, third array
// forEach will return undefined , whereas filter will return new array 
// using filter we will perform operation in return and we wil get answer as a whole object and number 

// using map we will perform operation in return and we wil get answer as a true or false 
let even = num.filter(function(ele,index,array){
    // console.log(`Element: ${ele}, Index: ${index}, Array: ${array}`)
    return ele % 2 === 0
})
console.log(even);

const user = [
    {name: "Nandkishore" , age:24 },
    {name: "Pankaj", age: 23},
    {name: "Gourav", age: 22}
]

let ans = user.filter(function(ele){
    return ele.age > 22
})

console.log(ans);


