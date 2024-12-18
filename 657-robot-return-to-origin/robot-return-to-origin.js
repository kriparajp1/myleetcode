/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let splitmoves=moves.split("")
    let leftright=10
    let updown=10
    let past;
    for(a of splitmoves){
        if(a=="L"){
            leftright--
        }else if(a=="R"){
            leftright++
        }else if(a=="U"){
            updown--
        }else{
            updown++
        }
    }
    return (leftright==10&&updown==10)?true:false;
};