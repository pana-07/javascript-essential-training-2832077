class Kettle {
  constructor(name, power, color, waterLevel, isOn) {
    this.name = name;
    this.power = power;
    this.color = color;
    this.waterLevel = waterLevel;
    this.isOn = isOn;
  }

  addWater(amount) {
    this.waterLevel += amount;
    console.log(`Added ${amount}ml water. Current level: ${this.waterLevel}ml`);
  }

  turnOn() {
    if (this.waterLevel > 0) {
      this.isOn = true;
      console.log(`${this.name} is now ON.`);
    } else {
      console.log("Cannot turn on: No water!");
    }
  }
}

export default Kettle;

import Kettle from "./kettle.js";

const myKettle = new Kettle("Whistling Kettle", 1500, "red", 0, false);
myKettle.addWater(500);
myKettle.turnOn();
console.log(myKettle);
