const reverseString = function(str) {
     let strAry = str.split("");
     let revAry = strAry.reverse();
     let revStr = revAry.join("");

    return revStr;

};

reverseString("")
// Do not edit below this line
module.exports = reverseString;
