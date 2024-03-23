const prompt = require('prompt-sync')();

const speedLimit = 70;
const kmPerDemeritPoint = 5;
const maxDemeritPoints = 12;

const speedStr = prompt("WHAT IS THE SPEED WHICH THE CAR IS GOING (in km/h): ");
const speed = parseFloat(speedStr);

if (!isNaN(speed) && speed > speedLimit) {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    console.log("Points:", demeritPoints);
    if (demeritPoints > maxDemeritPoints) {
        console.log("License suspended");
    }
} else {
    console.log("Ok");
}
