const removeFromArray = function(ary=[],...items) {
    
    for(let item of items){
    for(let i = 0; i<=ary.length;i++){
        if(ary[i] === item){
            ary.splice(i, 1); 
        }
    }
    }
    return ary;
};
removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
