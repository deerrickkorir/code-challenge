// Importing the prompt-sync module
const prompt = require('prompt-sync')();

//speed limit, km over the limit, and maximum to license suspension
const speedLimit = 70;
const kmPerDemeritPoint = 5;
const maxDemeritPoints = 12;

// INQUIERE for the current speed of the car
const speedStr = prompt("WHAT IS THE SPEED WHICH THE CAR IS GOING? (in km/h): ");
const speed = parseFloat(speedStr); // Converting the user input to a floating-point number

// Checking if  a valid number and if the speed exceeds the speed limit
if (!isNaN(speed) && speed > speedLimit) {
    // Calculating points based on the difference between the speed and the MAX speed limit
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    console.log("Points:", demeritPoints); // Printing the calculated demerit points to the console
    // Checking if the demerit points exceed the maximum allowed demerit points for license suspension
    if (demeritPoints > maxDemeritPoints) {
        console.log("License suspended"); // Printing a message indicating license suspension
    }
} else {
    console.log("Ok"); // Printing a message indicating that the speed is within the limit
}
