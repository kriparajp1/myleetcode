/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
   let k=s.split("").reduce((a,b)=>a==b)==true?Array.from(new Set(s.split(""))):s
   let setword=words.map(a=>{
    if(a.split("").reduce((a,b)=>a==b)==true){
    let u=Array.from(new Set(a.split(""))).join("")
    return u
    }else{
        return a
    }
   })
   let m=[""]
   let count=0
   for(a of k){
    let l=m[m.length-1]
    l+=a
    m.push(l)
   }
   for(b of m){
    for(c of setword){
        if(b==c){
            count++
        }
    }
   }
   return count
};