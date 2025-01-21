/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let lengthofS=s.length;
    let splitTheText=s.split("")
    let count=0
    for(a of splitTheText){
        if(a==letter){
            count++
        }
    }
    return Math.floor((count/lengthofS)*100) 

    
};