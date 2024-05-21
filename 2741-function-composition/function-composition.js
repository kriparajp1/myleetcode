/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let array=functions.reverse()
    let result=0
    return function(x) { 
        let temp=x
        for(q of array){
           temp=q(temp)
        }
        return (result=temp)
        
    }
    return result
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */