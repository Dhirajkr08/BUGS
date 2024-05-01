function orderFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let foodDelivered=Math.random()>0.5
            if(foodDelivered){
                resolve('Food delivered')
            }else{
                reject('Food not delivered')
            }

        },2000)
    })

}
function orderDessert(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let dessertOrder= Math.random()>0.5
            if(dessertOrder){
                resolve('Dessert delivered')
            }else{
                reject('Dessert not delivered')
            }
        },2000)
    })
}
function beverage(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let beverageD= Math.random()>0.5
            if(beverageD){
                resolve('cold drink delivered')
            }else{
                reject('cold drink not delivered')
            }

        },1000)
    })
}
orderFood()
.then((foodMsg)=>{
    console.log(foodMsg)
    return orderDessert()
    
    
})
.then((dessertMsg)=>{
    console.log(dessertMsg)
    return beverage()
    
})
.then((beverageMsg)=>{
    console.log(beverageMsg)
    console.log('Dream meal fulfilled')
    
})
.catch((err)=>{
    console.error(err)
    console.log("Dream meal failed")
})