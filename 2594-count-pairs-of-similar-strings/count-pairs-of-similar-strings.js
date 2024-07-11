/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
   const word=words.map(a=>{
       let b=a.split("").sort()
       return Array.from(new Set(b)).join("")
   })
   let array=[]
   for(let i=0;i<word.length;i++){
    for(let j=i+1;j<word.length;j++){
         if(word[i]===word[j]){
           array.push(word[i])
         }
    }
   }
   return array.length
};