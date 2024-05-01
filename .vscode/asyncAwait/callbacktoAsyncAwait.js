async function boardBusAt10(){
    try{
        const busArrive=await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let arrive=Math.random()>0.5
                if(arrive){
                    resolve('Board the bus')
                }else{
                    reject('Error:Bus is late.')
                }
            },3000)
        })
        console.log(busArrive)
    }catch(err){
        console.error(err)
    }

}
boardBusAt10()
