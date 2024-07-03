/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
     let result =[]
let map = new Map()
for(let i=0;i< arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
}
let iterable = Array.from(map.entries())
for(let [key,value] of iterable){
    if(value===1){
        result.push(key)
    }
}
let index = k-1
if(result[index]===undefined){
    return ""
}else{
    return result[index]
}
};