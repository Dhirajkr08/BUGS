const orderPizza=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let pizzaDelivered=Math.random()>0.5
            if(pizzaDelivered){
                resolve('Pizza has been delivered!')
            }
            else{
                reject('Pizza delivery failed.')
            }
        }, 2000);
    })
}
const orderDesert=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let desertDelivered=Math.random()
            if(desertDelivered){
                resolve('Dessert has beeen delivered!')
            }
            else{
                reject('Dessert delivery failed')
            }
        },1000);
    })
}
const data=async()=>{
    try{
        const result=await Promise.all([orderPizza(),orderDesert()])
        //console.log(result)
        result.forEach(ans=>console.log(ans))
    }
    catch(err){
        console.log(err)
    }
}
data()