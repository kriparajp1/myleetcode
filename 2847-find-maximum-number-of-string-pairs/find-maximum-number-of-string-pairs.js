/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const c=words.map((a)=>a.split("").sort().join("")).sort()
let b=0
for(let i=0;i<c.length;i++){
    for(let j=i+1;j<c.length;j++){
        if(c[i]===c[j]){
            b++
            break;
        }
    }
}
return b
};