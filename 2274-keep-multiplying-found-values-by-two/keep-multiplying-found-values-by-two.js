/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let sorted=nums.sort((a,b)=>a-b)
    let temp=original;
    for(let i=0;i<nums.length;i++){
        if(sorted[i]===temp){
            temp=sorted[i]*2
        }
    }
    return temp;
};