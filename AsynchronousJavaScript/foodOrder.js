const orderFood=()=>{
    return new Promise((resolve, reject) => {
        setInterval(() => {
            let food=Math.random()>0.5
            if(food){
                resolve('food delivered')
            }
            else{
                reject('Not delivered')
            }
            
        },2000);
    })
}
const orderDesert=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let desert=Math.random()>0.5
            if(desert){
                resolve('desert served')
            }
            else{
                reject('Not delivered yet')
            }
        },2000);
    })
}
orderFood()
.then((res)=>{
    console.log(res)
    return orderDesert()
    

})
.then((res)=>console.log(res))
.catch((err)=>console.error(err))