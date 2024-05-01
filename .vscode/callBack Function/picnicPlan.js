function checkCar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let car=true//Math.random>0.5
            if(car){
                resolve('Car is ready')
            }
            else{
                reject('Error: Car needs maintenance')
            }
        },2000)
    })
}
function packForPicnic(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let packed=true//Math.random()>0.5
            if(packed){
                resolve('Packed everything for picnic')
            }else{
                reject('Error: Not have some essentials')
            }
        },1000)
    })
}
checkCar()
.then((res)=>{
    console.log(res)
    return packForPicnic()
})
.then((res)=>{
    console.log(res)
    console.log("Go for picnic")

})
.catch((err)=>{
    console.error(err)
    console.log("Picnic cancelled")
})

