/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let func=fn
    let temp=init
    for(a of nums){
        temp=func(temp,a)
    }
    return temp
    
    
};