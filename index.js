let tempF = 25;
let tempC;

function convertToCelsius() {
  tempC = (tempF - 32) / 1.8;
  console.log(tempC);
  return;
}

function describeTemperature() {
  if (tempF < 0) {
    console.log("very cold");
  } else if (tempF < 20) {
    console.log("cold");
  } else if (tempF < 30) {
    console.log("warm");
  } else if (tempF < 40) {
    console.log("hot");
  } else {
    console.log("very hot");
  }
}

convertToCelsius(tempF);
describeTemperature(tempF);
