/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let q = []
    for (c of strs) {
        let num = +c
        if (isNaN(num)) {
            q.push(c.length)
        } else {
            q.push(num)
        }
    }
    return q.reduce((a, b) => a > b ? a : b)
};