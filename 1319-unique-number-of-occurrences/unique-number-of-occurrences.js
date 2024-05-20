/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
   let a=Array.from(new Set(arr))
    let m=[]
    for(w of a){
        let k=0
        for(e of arr){
            if(w===e){
                k++
            }
        }
        m.push([w,k])
    }
    let n=m.map((a)=>a[1])
    return n.every((a,b)=>n.indexOf(a)-n.lastIndexOf(a)===0)
};