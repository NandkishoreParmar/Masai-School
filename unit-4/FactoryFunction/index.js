

function iphone(ASIN,color,display,camera){
    return {
        ASIN : ASIN,
        color : color,
        display : display,
        camera : camera,
        dial(){
            return "tring.. tring.."
        },
        sendMessage() {
            return "Sending message"
        },
        cameraClick() {
            return "camera clicked"
        },
        connnectBluetooth(){
            return "Bluetooth connected successfully "
        }
    }

}

let phone1 = iphone(12,"Black",6,"front")
console.log(phone1);

console.log(phone1.dial());
console.log(phone1.sendMessage());
console.log(phone1.cameraClick());
console.log(phone1.connnectBluetooth());

