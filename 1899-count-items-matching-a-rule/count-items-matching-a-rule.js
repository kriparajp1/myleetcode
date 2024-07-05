/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let k=0
    if(ruleKey=="type"){
        k=0
    }else if(ruleKey=="color"){
        k=1
    }else if(ruleKey=="name"){
        k=2
    }
    let count=0
    for (a of items){
        if(a[k]===ruleValue){
            count++
        }
    }
    return count
};