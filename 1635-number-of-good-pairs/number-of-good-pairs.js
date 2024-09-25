/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let array=[]
    for(let i=0;i<=nums.length-1;i++){
        
        for(let j=i+1;j<=nums.length-1;j++){
            
            if(nums[i]==nums[j]){
                array.push([i,j])
            }
        }
    }
    return array.length
};