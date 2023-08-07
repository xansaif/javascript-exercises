const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 1;
    const num4 = Number(num);
    
    if (num4<0)
    {
        return "OOPS"
    }
    if (num4 == 0)
    {
        return num1;
    }
    for(let i=2; i<=num4;i++)
    {
        num3 = num1 + num2 ;
        num1 = num2;
        num2 = num3
    }
    return num3;
};

// Do not edit below this line
module.exports = fibonacci;
