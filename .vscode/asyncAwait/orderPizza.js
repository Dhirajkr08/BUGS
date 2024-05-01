async function orderPizza(){
    try{
        const pizza=await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const pizzaDelivered=Math.random()>0.5
                if(pizzaDelivered){
                    resolve('Pizza has been delivered!')
                }else{
                    reject("Pizza delivery failed")
                }
            },2000)
        })
        console.log(pizza)
    }catch(err){
        console.error(err)
    }
}
orderPizza()