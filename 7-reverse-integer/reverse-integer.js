/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let tostr=`${x}`
    let reversedArray=tostr.split("").reverse()
    let p=+reversedArray.filter((a)=>a!="-").join("")
    function is32(num){
         return -(2**31) <= num && num<= (2**31) - 1
    }
    if(is32(p)===true){
    if(x<0){
        reversedArray.pop()
        reversedArray.unshift("-")

        return +reversedArray.join("")
    }
    return +reversedArray.join("")
    }else{
        return 0
    }
};