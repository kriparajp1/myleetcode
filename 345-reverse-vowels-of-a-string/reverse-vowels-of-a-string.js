/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels="aeiouAEIOU"
    let wordvowels=s.split("").filter((a)=>vowels.includes(a)).reverse()
    let words=s.split("")
    let count=0
    for(let i=0;i<words.length;i++){
        if(vowels.includes(words[i])){
            words[i]=wordvowels[count];
            count++
        }
    }
    return words.join("")
};