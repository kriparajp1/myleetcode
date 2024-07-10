/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const words=title.split(" ").map((a,b)=>a.toLowerCase())
    const array=[]
    for(elem of words){
        if(elem.length>2){
        let word1=elem.split("").map((a,b)=>b===0?a.toUpperCase():a).join("")
        array.push(word1)
        }else{
            array.push(elem)
        }
    }
    return array.join(" ")
};