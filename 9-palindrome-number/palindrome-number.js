/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const k=x.toString()
const l=x.toString().split("").reverse().join("")
return l===k
};