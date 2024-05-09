function projectorPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let projcetor=true//Math.random()>0.5
            if(projcetor){
                resolve("Projector rented successfully")
            }else{
                reject("Error: Projectors out of stock")
            }
        },2000)
    })

}
function pizzaPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let pizza=true//Math.random()>0.5
            if(pizza){
                resolve("Pizza delivered at time")
            }else{
                reject("Error: Pizzas not delivered on time")
            }
        },3000)
    })
}
function friendsPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let friends=true//Math.random()>0.5
            if(friends){
                resolve("Both friends available")
            }else{
                reject("Error: Both friends not available")
                }
        },1000)
    })
}
Promise.all([projectorPromise(),pizzaPromise(),friendsPromise()])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})