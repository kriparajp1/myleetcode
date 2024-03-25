/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let num1=[ ]
    let num2=[-1,-1]
    let num3=[]
    let num4=[]
    let s=0
    for(let i=0;i<nums.length;i++){
        if(target===nums[i]){
            num1.push(i)
            s+=1

        }
        
    }if(s==0){
        return num2
    }else if(num1.length==1){
        num3.push(num1[0])
        num3.push(num1[0])
        return num3

    }else if(num1.length>2){
         num4.push(num1[0])
         let num5=num1.length-1
         num4.push(num1[num5])
         return num4
    }else{
        return num1
    }
    
};