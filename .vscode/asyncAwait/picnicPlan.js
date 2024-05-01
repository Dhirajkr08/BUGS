async function picnicDescision(){
    try{
        const weather=await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const isSunny=Math.random>0.5
                if(isSunny){
                    resolve('Let us go for picnic')
                }else{
                    reject('Error: It is cloudy')
                }
            },3000)
        })
        console.log(weather)
    }catch(err){
        console.error(err)
    }
}
picnicDescision()