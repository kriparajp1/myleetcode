/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let splitmoves=moves.split("")
    let origin=10
    let updown=10
    let past;
    for(a of splitmoves){
        if(a=="L"){
            origin--
        }else if(a=="R"){
            origin++
        }else if(a=="U"){
            updown--
        }else{
            updown++
        }
    }
    return (origin==10&&updown==10)?true:false;
};