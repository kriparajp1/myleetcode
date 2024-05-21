/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let func=fn
    let result=arr.filter((a,b,c)=>func(a,b,c))
    return result
};