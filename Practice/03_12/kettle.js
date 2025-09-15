import Kettle from "./kettle.js";

const myKettle = new Kettle("Whistling Kettle", 1500, "red", 0, false);
myKettle.addWater(500);
myKettle.turnOn();
console.log(myKettle);
