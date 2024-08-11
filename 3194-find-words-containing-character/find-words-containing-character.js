/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let k=[]
    for(let i=0;i<words.length;i++){
    let a=words[i].split("").sort().map(element=>element.toLowerCase())
   for(let j=0;j<a.length;j++){
        if(x==a[j]){
            k.push(i)
            break
        }
   }

}
return k
};