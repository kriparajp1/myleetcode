/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let thefunction=fn
    const array=arr.map((a,b)=>thefunction(a,b))
    return array
};