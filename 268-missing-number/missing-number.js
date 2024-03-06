/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let k=0
    let m=0
    nums.sort((a,b)=>a-b)
    Breakpoint:
    for(let i=0;i<nums.length;i++){
        
        if(k!=nums[i]){
            m=nums[i]
            break Breakpoint
        }
        k+=1
    }
    return k
};