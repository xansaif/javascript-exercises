const leapYears = function(year) {
    let leapMassage = "";
    if (year%4!=0)
    {
        leapMassage = "false"
    }
    else if (year%4==0)
    {
        if (year%100==0)
        {
            if (year%400==0)
            {
                leapMassage = "true";
            }
            else leapMassage = "false";
        }

        else leapMassage = "true";
    }

    return leapMassage;
};

leapYears(700);
// Do not edit below this line
module.exports = leapYears;
