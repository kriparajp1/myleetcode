/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let sorted=nums.sort((a,b)=>a-b);
    console.log(sorted)
    let temp=original;
    for(let i=0;i<sorted.length;i++){
        if(temp==sorted[i]){
            temp=sorted[i]*2
        }
    }
    return temp
};