async function PlanForPicnic(){
    try{
        const checkCar=await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const carReady=Math.random()>0.5
                if(carReady){
                    resolve('Car is ready')
                }else{
                    reject('Error: Car needs maintenance')
                }
            },2000)
        })
        console.log(checkCar)
    }catch(err){
        console.log(err)
    }
    try{
        const packForPicnic=await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const itemPacked=Math.random()>0.5
                if(itemPacked){
                    resolve('Packed everything for picnic')
                }else{
                    reject('Error: Not have some essentials')
                }
            },1000)
        })
        console.log(packForPicnic)
    }
    catch(err){
        console.log(err)
    }
}
PlanForPicnic()