/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let dateArray=date.split("-");
    let x=+dateArray[1]
    let intDay=+dateArray[2]
    let result;
    let day
    let year=+dateArray[0]
    if((year%4==0&&year%100!=0)||year%400==0){
        switch (x){
        case 01:
        day=0
        result=intDay+day
        break;
        case 02:
        day=31
        result=intDay+day
        break;
        case 03:
        day=60
        result=intDay+day
        break;
        case 04:
        day=91
        result=intDay+day
        break;
        case 05:
        day=121
        result=intDay+day
        break;
        case 06:
        day=152
        result=intDay+day
        break;
        case 07:
        day=182
        result=intDay+day
        break;
        case 08:
        day=213
        result=intDay+day
        break;
        case 09:
        day=244
        result=intDay+day
        break;
        case 10:
        day=274
        result=intDay+day
        break;
        case 11:
        day=305
        result=intDay+day
        break;
        case 12:
        day=335
        result=intDay+day
        break;
        default:
        break;

    }
    }else{
    switch (x){
        case 01:
        day=0
        result=intDay+day
        break;
        case 02:
        day=31
        result=intDay+day
        break;
        case 03:
        day=59
        result=intDay+day
        break;
        case 04:
        day=90
        result=intDay+day
        break;
        case 05:
        day=120
        result=intDay+day
        break;
        case 06:
        day=151
        result=intDay+day
        break;
        case 07:
        day=181
        result=intDay+day
        break;
        case 08:
        day=212
        result=intDay+day
        break;
        case 09:
        day=243
        result=intDay+day
        break;
        case 10:
        day=273
        result=intDay+day
        break;
        case 11:
        day=304
        result=intDay+day
        break;
        case 12:
        day=334
        result=intDay+day
        break;
        default:
        break;

    }
    }
    return result

};