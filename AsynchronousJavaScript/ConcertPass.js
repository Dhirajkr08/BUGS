const concertPass=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let pass=Math.random()>0.5
            if(pass){
                resolve('Pass recieved')
            }else{
                reject('Pass not received')
            }
        },3000)
    })
}
concertPass()
.then((res)=>console.log(res))
.catch((err)=>console.log(err))