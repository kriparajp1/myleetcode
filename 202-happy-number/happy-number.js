/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
     let num = String(n)
    let q = new Set();
    while(!q.has(num)){
        let result = 0;
        for(let i = 0; i < num.length; i++){
            result += Math.pow(parseInt(num[i]), 2)
        }
        console.log(num)
        if(result == 1) return true    
        q.add(num)
        num = result.toString();
    }
    return false;
};