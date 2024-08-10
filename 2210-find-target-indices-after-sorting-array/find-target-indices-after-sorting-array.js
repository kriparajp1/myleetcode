/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let a=nums.sort((a,b)=>a-b)
    let k=[]
    for(let i=0;i<a.length;i++){
        if(a[i]==target){
            k.push(i)
        }
    }
    return k
};