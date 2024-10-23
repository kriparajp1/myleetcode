/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let num=nums.sort((a,b)=>b-a)
    // for (let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(num[i]==num[j]){
    //             return true
    //         }
    //     }
    // }
    // return false
    let num=Array.from(new Set(nums))
    console.log(num)
    if(num.length==nums.length){
        return false
    } else{
        return true
    }
};