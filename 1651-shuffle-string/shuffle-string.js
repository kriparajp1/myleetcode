/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let nxtarray=s.split("").map((a,b)=>[a,indices[b]]).sort((a,b)=>a[1]-b[1])
    return nxtarray.map((a,b)=>a[0]).join("")
};