/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const array=[]
    for(let i=0;i<list1.length;i++){

        for(let j=0;j<list2.length;j++){
            if(list1[i]===list2[j]){
                let value=i+j
                array.push([list1[i],value])
                break;
            }
        }
    }
    let length=array.sort((a,b)=>a[1]-b[1])
    let p=length[0][0]
    let o=length.filter((a,b)=>a[1]===length[0][1])
    let map=o.map((a,b)=>a[0])

    
    return map
};