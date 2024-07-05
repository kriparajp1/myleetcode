/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count=0
    let preflength=pref.length
   for(a of words){
    let k=a.split("").filter((a,b)=>b<preflength).join("")
    if(k.includes(pref)===true){
        count++
    }
   }
    return count
};