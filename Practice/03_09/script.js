/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  setName: function(newName) {
    this.name = newName;
  },
  setVolume: function(newVolume) {
    this.volume = newVolume;
  },
  setColor: function(newColor) {
    this.color = newColor;
  },
  setPocketNum: function(newNum) {
    this.pocketNum = newNum;
  },
  toggleLid: function(lidStatus) {
    this.lidOpen = lidStatus;
  },
  setStrapLength: function(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};