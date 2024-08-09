const checkCar=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let car=true//Math.random()>0.5
            if(car){
                resolve('Car is ready')
            }
            else{
                reject('Error: Car needs maintenance')
            }
        },2000);
    })
}
const packForPicnic=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let packed=true//Math.random()>0.5
            if(packed){
                resolve('Packed everything for picnic')
            }
            else{
                reject('Error: Not have some essentials')
            }
        }, 1000);
    })
}
const display=async()=>{
    try{
        const ans=await Promise.all([checkCar(),packForPicnic()])
       
        console.log(ans)
        //ans.forEach(result=>console.log(result))
         console.log('Go For Picnic')

    }
    catch(err){
        console.error(err)
    }
}
display()