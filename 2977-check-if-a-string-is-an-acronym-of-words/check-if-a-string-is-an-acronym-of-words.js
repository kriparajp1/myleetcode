/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let q=[]
    for(let i=0;i<words.length;i++){
        if(words[i][0]===s[i]){
            q.push(true)
        }else{
        q.push(false)
        }
    }
    if(q.length===s.length){
        return q.every((a)=>a===true)
    }
    return false
};