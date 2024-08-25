class Car {
    constructor(name, accelerationPower, brakingPower, fuelCapacity = 100) {
        this.name = name;
        this.accelerationPower = accelerationPower; // meters per second squared
        this.brakingPower = brakingPower; // meters per second squared
        this.speed = 0; // meters per second
        this.fuelLevel = fuelCapacity; // starting with a full tank
        this.fuelCapacity = fuelCapacity; // maximum fuel capacity
        this.resultElement = document.getElementById('result');
    }

    accelerate() {
        if (this.fuelLevel > 0) {
            this.speed += this.accelerationPower;
            this.consumeFuel();
            this.logResult(`Accelerating: Current speed is ${this.speed} m/s`);
        } else {
            this.logResult("Cannot accelerate: Fuel tank is empty.");
        }
    }

    brake() {
        this.speed -= this.brakingPower;
        if (this.speed < 0) {
            this.speed = 0;
        }
        this.logResult(`Brakes applied: Current speed is ${this.speed} m/s`);
    }

    checkSpeed() {
        this.logResult(`Current speed: ${this.speed} m/s`);
        return this.speed;
    }

    refuel() {
        this.fuelLevel = this.fuelCapacity;
        this.logResult("Refueled to maximum capacity.");
    }

    consumeFuel() {
        // Assuming the fuel consumption is proportional to speed
        this.fuelLevel -= this.speed * 0.05;
        if (this.fuelLevel < 0) {
            this.fuelLevel = 0;
        }
        this.logResult(`Fuel level: ${this.fuelLevel.toFixed(2)}%`);
    }

    drive(intervals) {
        for (let i = 0; i < intervals.length; i++) {
            const action = intervals[i];
            if (action === "accelerate") {
                this.accelerate();
            } else if (action === "brake") {
                this.brake();
            }

            if (this.fuelLevel <= 0) {
                this.logResult("Out of fuel. The car stops.");
                break;
            }
        }
    }

    logResult(message) {
        this.resultElement.innerText += `${message}\n`;
    }
}

// Create a new car instance
const myCar = new Car("Sporty", 5, 7);

// Simulate a driving session
function startDriving() {
    myCar.drive(["accelerate", "accelerate", "brake", "accelerate", "brake", "accelerate"]);
}
