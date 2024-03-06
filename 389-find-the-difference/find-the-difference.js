/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let k=0
let m=0
let s1=s.split("").sort()
let t1=t.split("").sort()
if(s.length>t.length){
  k=s.length
  m=1
}
else{
  k=t.length
}
for(let i=0;i<k;i++){
  if(s1[i]!=t1[i]){
    if(m==1){
      return s1[i]
    }
    else{
      return t1[i]
    }
  }
}
};