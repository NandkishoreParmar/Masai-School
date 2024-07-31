
function combiningArr(fruits,vegetables){
    let groceries = []
    // groceries = fruits.concat(vegetables)
    // console.log(groceries)
    groceries = [...fruits,...vegetables]
    return groceries

}

const fruits = ["apple","banana","orange"]
const vegetables = ["carrot","broccoli","spinach"]
console.log(combiningArr(fruits,vegetables))

