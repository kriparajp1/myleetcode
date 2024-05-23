/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let k=nums.map((a,b)=>String(a))
    let q=k.filter((a)=>a.length%2==0)
    return q.length

    
};