/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let l=s.split("")
    let m=l.filter((a,b)=>!isNaN(+a)).map(a=>+a)
    let j=Array.from(new Set(m)).sort((a,b)=>a-b)
    return j.length<2?-1:j[j.length-2]
    
};