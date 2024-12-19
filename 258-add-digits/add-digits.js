/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let numString=`${num}`
    let string=numString.split("");
    let result=num
    if(string.length<=1) return num;
    while(string.length!=1){
        let nums=0;
        for(a of string){
            nums+=Number(a)
        }
        numString=`${nums}`
        string=numString.split("");
        result=nums
    }
    return result;
};