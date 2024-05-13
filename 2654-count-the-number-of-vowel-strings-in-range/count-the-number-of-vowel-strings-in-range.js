/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let q=[]
    let e=words.map((a,b)=>b>=left&&b<=right?a:"")
    let v="aeiouAEIOU"

    for(w of e){
        if(v.includes(w[0])===true&&v.includes(w[w.length-1])===true){
            
                q.push(w)
            
            
        }
    }
    return q.length
};