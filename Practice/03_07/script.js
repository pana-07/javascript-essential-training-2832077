/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const kettle = {
  name: "Whistling Kettle",
  capacity: 1500, // ml
  color: "red",
  waterLevel: 0,
  isOn: false,
  
  // Add water to kettle
  addWater: function(amount) {
    if (this.waterLevel + amount <= this.capacity) {
      this.waterLevel += amount;
      console.log(`Added ${amount}ml. Current water: ${this.waterLevel}ml`);
    } else {
      console.log("Too much water! Might spill over.");
    }
  },

  // Pour out water
  pourWater: function(amount) {
    if (this.waterLevel - amount >= 0) {
      this.waterLevel -= amount;
      console.log(`Poured ${amount}ml. Remaining: ${this.waterLevel}ml`);
    } else {
      console.log("Not enough water in the kettle!");
    }
  },

  // Switch functions
  turnOn: function() {
    if (this.waterLevel > 0) {
      this.isOn = true;
      console.log("Kettle is now ON. Heating up! ♨️");
    } else {
      console.log("Please add water before turning on! ⚠️");
    }
  },

  turnOff: function() {
    this.isOn = false;
    console.log("Kettle is now OFF. Safe to touch! ✅");
  }
};
