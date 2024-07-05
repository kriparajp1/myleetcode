/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count=0
    for (a of words){
        let k=a.length
        let m=a.split("").filter((a)=>allowed.includes(a)).length
        if(k==m){
            count++
        }
    }
    return count
};