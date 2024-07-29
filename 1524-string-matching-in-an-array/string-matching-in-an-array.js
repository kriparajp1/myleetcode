/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let k=[]
    let b=words.sort((a,b)=>a.length-b.length)
    for (let i=0;i<b.length;i++){
        for (let j=i+1;j<b.length;j++){
        if(b[j].includes(b[i])){
            k.push(b[i])
        }
    }
    }
   return Array.from(new Set(k))
};