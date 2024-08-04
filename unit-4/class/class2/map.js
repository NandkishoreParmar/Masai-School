
// map
let sweets = ["kova","jalebi","Barfi","laddu"]

// map also takes three parameters   element, index, array        default first take element , second index, third array
// forEach will return undefined , whereas map will return new array 
let res = sweets.map(function(ele,index,array){
    return ele
    // console.log(ele);
    
})
console.log(res);

const user = [
    {name: "Nandkishore" , age:24, },
    {name: "Pankaj", age: 23},
    {name: "Gourav", age: 22}
]

let obj = user.map(function(ele){
    return ele
})
console.log(obj);
