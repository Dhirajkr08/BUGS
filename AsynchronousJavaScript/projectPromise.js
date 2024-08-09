function projrctPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let projector=Math.random()>0.5
            if(projector){
                resolve('Projector rented successfully')
            }else{
                reject('Error: Projectors out of stock')
            }
        }, 1000);

    })

}
function pizzaPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let pizza=Math.random()>0.5
            if(pizza){
                resolve('Pizzas delivered at time')
            }else{
                reject('pizzas not delivered on time')
            }
        },2000);
    })
}
function friendPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let friends=Math.random()>0.5
            if(friends){
                resolve('Both friends available')
            }
            else{
                reject('ErrorL both friends are not available')
            }
        },3000);
    })
}
Promise.all([projrctPromise(),pizzaPromise(),friendPromise()])
.then((res)=>{
    console.log(res)
    //res.forEach(ans=>console.log(ans))
})
.catch((err)=>console.error(err))