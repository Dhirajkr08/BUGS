const checkWeather=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let sunny=Math.random()>0.5
            if(sunny){
                resolve("Let's go for Picnic")
            }
            else{
                reject('Error: It is cloudy')
            }
        },3000)
    })
}
checkWeather()
.then((res)=>{
    console.log(res)
})
.catch((err)=>console.error(err))