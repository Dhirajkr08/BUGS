function concertPassPromise(){
    return new Promise((resolve,reject)=>{
        let chance=Math.random()
        if(chance>=0.5){
            resolve('Pass received')
        }else{
            reject('Pass not received')
        }
    },3000)
}
concertPassPromise()
.then((res)=>console.log(res))
.catch((err)=>console.error(err))