/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x=0
    for(a of operations){
        if(a=="--X"){
            --x
        }else if(a=="X++"){
            x++
        }else if(a=="++X"){
            ++x
        }else if(a=="X--"){
            x--
        }
    }
    return x
};