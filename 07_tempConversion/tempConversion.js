const convertToCelsius = function(temp) {
  
  let result = ((temp - 32)*5)/9 
  let roundR = result.toFixed(1);
  return parseFloat(roundR);

};

const convertToFahrenheit = function(temp) {
  let result = (temp*(9/5))+32
  let roundR = result.toFixed(1);
  return parseFloat(roundR);

};

convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
