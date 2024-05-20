/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.filter((a,b,c)=>c.indexOf(a)-c.lastIndexOf(a)==0)
}