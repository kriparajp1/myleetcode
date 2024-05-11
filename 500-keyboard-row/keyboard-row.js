/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const q="qwertyuiopQWERTYUIOP"
    const a="asdfghjklASDFGHJKL"
    const z="zxcvbnmZXCVBNM"
    const l=[]

    for(k of words){
        if(k.split("").filter((m)=>q.includes(m)).length===k.length){
            l.push(k)
        }else if(k.split("").filter((m)=>a.includes(m)).length===k.length){
            l.push(k)
        }else if(k.split("").filter((m)=>z.includes(m)).length===k.length){
            l.push(k)
        }
    }
    return l
    
};