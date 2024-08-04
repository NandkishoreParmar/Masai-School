
// methods              input      return Value
// forEach              array      undefined
// map                  array       array
// filter               array      array
// reduce               array      single value


// forEach.map   = undefined.map = not possible
// forEach.filter = not possible
// forEach.reduce = not possible
// map.filter   = possible
// map.reduce   = possible
// filter.reduce = possible
// reduce.filter = not possible
// reduce.map    = not possible



// find the sum of the squares of the even Number
// filter.map.reduce


var num = [2,3,4,5,6,7,8,9]
let even = num.filter(function(ele){
    return ele % 2 == 0
})
console.log(even);

var squares = even.map(function(ele){
    return ele * ele
})
console.log(squares);

var sum = squares.reduce(function(acc,ele){
    return acc + ele
},0)
console.log(sum);

