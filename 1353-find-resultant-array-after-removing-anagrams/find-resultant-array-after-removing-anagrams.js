/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let a=words.map(a=>Array.from(new Set(a.split(""))).sort().join(""))
    let b=words
    let l=[]
    let j=a[0]
    l.push(j)
    for(f of a){
        if(l[l.length-1]!=f){
          l.push(f)
        }
    }
    let array=[""]
    for(let i=0;i<l.length;i++){
        for(let j =0;j<a.length;j++){
            if(!(array[array.length-1][1]===a[j])){
             if(l[i]===a[j]){
                array.push([words[j],a[j]])
             }
        }
        }
    }
    let y=array.filter(a=>a!="")
    if(words.length>2){
    return y.map(a=>a[0])
    }else {
        return b
    }
};