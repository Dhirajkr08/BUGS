function OrderFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let orderReceived=Math.random()>0.5
            if(orderReceived){
                resolve('Food delivered')
            }else{
                reject('Food not delivered')
            }
        },2000)
    })
}
function dessertOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let dessertOrder=Math.random()
            if(dessertOrder){
                resolve('Dessert delivered')
            }else{
                reject('Dessert not delivered')
            }
        },1000)
    })
}
OrderFood()
.then((res)=>{
    console.log(res)
    return dessertOrder()
})
.then((res)=>{
    console.log(res)
    console.log('Dream Meal fulfilled')
})
.catch((er)=>{
    console.log(er)
    console.log('Dream Meal not failed')
})