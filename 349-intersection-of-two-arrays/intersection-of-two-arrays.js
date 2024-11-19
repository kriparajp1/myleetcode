/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let num1=Array.from(new Set(nums1));
    let num2=Array.from(new Set(nums2))
    let temp=[]
    for(let i=0;i<num1.length;i++){
        for(let j=0;j<num2.length;j++){
        if(num2[j]==num1[i]){
            temp.push(num1[i])
            continue;
        }
        }
    }
    
    return Array.from(new Set(temp))
};