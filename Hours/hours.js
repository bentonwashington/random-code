//needed to take user input
const prompt = require("prompt-sync")();

//get variables
var timeIn = prompt(`What time did you get in? `);
var timeOut = prompt(`What time did you get out? `);

//algorithm to get correct time
var diff = timeOut - timeIn;
var hours = (diff - 100) / 100;

//JESUS IS LORD AND SAVIOR
console.log(hours)