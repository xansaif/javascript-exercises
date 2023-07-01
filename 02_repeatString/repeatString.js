const repeatString = function(s,num) {
    s = "";
    for(let i = 0;i<=num;i++){
        if(num < 0){
            return "ERROR"
        }

        else return s+=s;
    }
};
const number = Math.floor(Math.random() * 1000)
repeatString("", number)
// Do not edit below this line
module.exports = repeatString;
