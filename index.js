let tempF = prompt("Enter a temperature in \u00B0Farenheit");
let tempC;
let tempDescription;

function convertToCelsius() {
  tempC = (tempF - 32) / 1.8;
  tempC = tempC.toFixed(3);
  console.log(tempC);
}

function describeTemperature() {
  let tempCheck = (tempF - 32) / 1.8;

  if (tempCheck < 0) {
    console.log("very cold");
    tempDescription = "very cold";
  } else if (tempCheck < 20) {
    console.log("cold");
    tempDescription = "cold";
  } else if (tempCheck < 30) {
    console.log("warm");
    tempDescription = "warm";
  } else if (tempCheck < 40) {
    console.log("hot");
    tempDescription = "hot";
  } else {
    console.log("very hot");
    tempDescription = "very hot";
  }
}

convertToCelsius(tempF);
describeTemperature(tempF);
window.alert(`${tempF}\u00B0F = ${tempC}\u00B0C
${tempC}\u00B0C feels ${tempDescription}`);
