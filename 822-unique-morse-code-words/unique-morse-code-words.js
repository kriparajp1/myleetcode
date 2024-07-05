/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let array=[]
    for (elem of words){
        let split=elem.split("")
        let value=""
        for(elem2 of split){
          if(elem2=="a"){
             value +=a
          }else if(elem2=="b"){
            value+=b
          }else if(elem2=="c"){
            value+=c
          }else if(elem2=="d"){
            value+=d
          }else if(elem2=="e"){
            value+=e
          }else if(elem2=="f"){
            value+=f
          }else if(elem2=="g"){
            value+=g
          }else if(elem2=="h"){
            value+=h
          }else if(elem2=="i"){
            value+=i
          }else if(elem2=="j"){
            value+=j
          }else if(elem2=="k"){
            value+=k
          }else if(elem2=="l"){
            value+=l
          }else if(elem2=="m"){
            value+=m
          }else if(elem2=="n"){
            value+=n
          }else if(elem2=="o"){
            value+=o
          }else if(elem2=="p"){
            value+=p
          }else if(elem2=="q"){
            value+=q
          }else if(elem2=="r"){
            value+=r
          }else if(elem2=="s"){
            value+=s
          }else if(elem2=="t"){
            value+=t
          }else if(elem2=="u"){
            value+=u
          }else if(elem2=="v"){
            value+=v
          }else if(elem2=="w"){
            value+=w
          }else if(elem2=="x"){
            value+=x
          }else if(elem2=="y"){
            value+=y
          }else if(elem2=="z"){
            value+=z
          }
        }
        array.push(value)
    }
    return Array.from(new Set(array)).length
};