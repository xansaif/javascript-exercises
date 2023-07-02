const sumAll = function(num,num2) {
    if(typeof(num)!="number" || typeof(num2)!="number")
    {
        return "ERROR"
    }
    
    if(num > num2){
        let sum1 = (num*(num+1)/2);
        let sum2 = (num2*((num2+1))/2);
        let totalSum = (sum1+1) - (sum2);       
        return totalSum;
    }
    
    else 
    {
    let sum1 = (num*(num+1)/2);
    let sum2 = (num2*((num2+1))/2);
    let totalSum = (sum2+1) - (sum1);
    return totalSum;
    }
    
};
sumAll(10,[90,1]);
// Do not edit below this line
module.exports = sumAll;

//I dont think the way I solved it was intended or is efficent buy it works  */

//edit: oh shit it was the intend method