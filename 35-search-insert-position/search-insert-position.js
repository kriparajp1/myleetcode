/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let k=0
  let l=0
  let m=nums
    for(let i=0;i<nums.length;i++){
      if(nums[i]==target){
        k=1
      }
    }
     if(k==0){
       m.push(target)
       m.sort((a, b) => a - b)
     }
  
    for(let i=0;i<=m.length;i++){
        if(target===m[i]){
            l=i


        }
    }
   
    return l
};