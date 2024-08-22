const phone = {
    type : "phone",
    screen : 6,
}
const tab = {
    type : "phone",
    screen : 6,
}
const laptop = {
    type : "phone",
    screen : 6,
}

const diviceproto = {
    powerOn(){
        return ${this.type} is on
    }
    powerOff(){
        return ${this.type} is off
    }
}

phone.__proto__ = deviceproto

console.log(phone);
