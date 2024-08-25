class Iphone3{

constructor(ASIN,color,display,camera,bluetooth){
    this.ASIN = ASIN,
    this.color= color,
    this.display=display,
    this.camera= camera,
    this.bluetooth=bluetooth

    this.dial = function(){
        return "tring.. tring.."
    },
    this.sendMessage = function(){
        return "Sending Message"
    }
    this.cameraClick = function(){
        return "Camera Clicked"
    }
    this.connectBluetooth = function(){
        return "Bluetooth connected successfully"
    }
}
}


let iphone = new Iphone3(12,"Black",6.5,"ios","bl 2.5")
console.log(iphone);

console.log(iphone.dial());
console.log(iphone.sendMessage());
console.log(iphone.cameraClick());
console.log(iphone.connectBluetooth());

