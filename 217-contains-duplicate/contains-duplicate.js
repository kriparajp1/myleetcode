/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let k=0
    let g=nums.sort((a,b)=>a-b)
    closeloop:
    for(let i=0;i<g.length;i++){
        if(g[i]==g[i+1]){
            k=1
        break closeloop
        }   
    
    }
    if(k==1){
        return true
    }else{
        return false
    }
};