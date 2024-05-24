/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let p=s.split(" ")
    let k=p.filter((a,b)=>a!="")
    return k[k.length-1].length
};