async function happlyMeal(){
    try{
        const Pizza=await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let pizzaDelivered=Math.random()>0.5
                if(pizzaDelivered){
                    resolve('Pizza has been delivered!')
                }else{
                    reject('Pizza delivery failed.')
                }
            },2000)
        })
        console.log(Pizza)
    }
    catch(err){

    }
    try{
        const dessert=await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const dessertDelivered=Math.random()>0.5
                if(dessertDelivered){
                    resolve('Dessert has been delivered!')
                }else{
                    reject('Dessert delivery failed.')
                }
            },1000)
        })
        console.log(dessert)
    }
    catch(err){
        console.log(err)
    }
}
happlyMeal()