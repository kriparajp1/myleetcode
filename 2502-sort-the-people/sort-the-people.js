/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let nextarray=[]
    for(let i=0;i<names.length;i++){
        nextarray.push([names[i],heights[i]])
    }
    let sortnextarray=nextarray.sort((a,b)=>b[1]-a[1])
    return sortnextarray.map((a,b)=>a[0])
    
};