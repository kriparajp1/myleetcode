/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    const q=[]
    for(w of words){
        let m=w.split(separator)
        q.push(m)
    }
    const j=q.flat(Infinity).filter((a,b)=>a!="")

    return j
};