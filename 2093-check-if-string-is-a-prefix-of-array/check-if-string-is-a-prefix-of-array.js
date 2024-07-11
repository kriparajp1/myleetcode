/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let k=''
    let m=false
    for(a of words){
        k+=a
        if(k===s){
            m=true
            break;
        }
    }
    return m
};