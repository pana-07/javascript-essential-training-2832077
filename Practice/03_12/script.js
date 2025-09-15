/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
// kettle.js
export default class Kettle {
  constructor(name, capacity, color, waterLevel, isOn) {
    this.name = name;
    this.capacity = capacity;
    this.color = color;
    this.waterLevel = waterLevel;
    this.isOn = isOn;
  }

  addWater(amount) {
    if (this.waterLevel + amount <= this.capacity) {
      this.waterLevel += amount;
      console.log(`Added ${amount}ml. Current water: ${this.waterLevel}ml`);
    } else {
      console.log("Too much water! Might spill over.");
    }
  }

  turnOn() {
    if (this.waterLevel > 0) {
      this.isOn = true;
      console.log("Kettle is now ON. Heating up! ♨️");
    } else {
      console.log("Add water first!");
    }
  }

  turnOff() {
    this.isOn = false;
    console.log("Kettle is now OFF. ✅");
  }
}
// script.js
import Kettle from "./kettle.js";