/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let promise1=new Promise((resolve,reject)=>
    setTimeout(()=>{
        resolve(millis)
    },millis))
    async function prom(){
        const result=await promise1
        return result
    }
    return prom()
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */