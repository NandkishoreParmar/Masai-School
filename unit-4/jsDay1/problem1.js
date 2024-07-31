function combiningArray(fruits, vegetables){
    let grociries = ""

    grociries = fruits.concat(vegetables)

    return grociries


}

const fruits = ["apple","banana","orange"]
const vegetables = ["carrot","broccoli","spinach"]
console.log(combiningArray(fruits,vegetables))
