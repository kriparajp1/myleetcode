/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let wordone=s.split("").sort().join("")
    let wordtwo=t.split("").sort().join("")
    return wordone==wordtwo
};