const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sumof = arr.reduce((sum, current) => sum + current, 0)
  return sumof;
};

const multiply = function(...num) {
  let multui = num.reduce((a,b) => a*b)
 return multui;
};

const power = function(num1,num2) {
return num1 ** num2
};

const factorial = function(num) {
  let fact = 1;
  if(num == 0 || num == 1){ return fact}
  else 
  {
    for(let i = num; i>1 ; i--){
    fact = fact * i;
    }
    return fact
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
