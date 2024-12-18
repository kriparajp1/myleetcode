/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let temp=""
    let split=address.split("")
    for(a of split){
        if(a==="."){
            temp+="[.]"
        }else{
            temp+=a
        }
    }
    return temp
};