/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    const q=[]
    for(w of details){
        q.push(+(w[11]+w[12]))
    }
    return q.filter((a)=>a>60).length

};