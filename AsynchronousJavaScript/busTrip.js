const boardBusAt10=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let busArrived=Math.random()>0.5
            if(busArrived){
                resolve('Board the bus')
            }else{
                reject('Error:Bus is late.')
            }    
        }, 3000);
    })
}
const display=async()=>{
    try{
        const data=await boardBusAt10()
        console.log(data)
    }
    catch(err){
        console.log(err)

    }
}
display()