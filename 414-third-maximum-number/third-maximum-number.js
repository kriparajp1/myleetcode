/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b)=>b-a)
    let setar=Array.from(new Set(nums))
    if(setar.length<3){
        return setar[0]
    }else{
        return setar[2]
    }
};