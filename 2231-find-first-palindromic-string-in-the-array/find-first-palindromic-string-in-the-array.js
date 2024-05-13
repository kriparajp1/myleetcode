/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let q=""
    for(w of words){
        let e=w.split("").reverse().join("")
        if(e===w){
            q+=w
            break;
        }
    }
    
    return q

};