/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let x=s.split("")
    let q=x.filter((a,b,c)=>{
        if(c.indexOf(a)-c.lastIndexOf(a)===0){
            return a
        }
        
    })
    return x.indexOf(q[0])
};