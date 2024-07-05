/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const words=s.split(" ")
    const sentance=words.filter((a,index)=>index<k)
    return sentance.join(" ")
};