function boilWater(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let water=true;
            if(water){
                resolve('Water boiled')
            }
            else{
                reject('Not boiled yet')
            }
        },2000)
    })
}
function addCoffeePowder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let coffeePowder=true
            if(coffeePowder){
                resolve('Added coffee powder')
            }
            else{
                reject('Not added yet')
            }
        },500)
    })
}
function brewCoffee(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let Brewed=true
            if(Brewed){
                resolve("Brewed coffee")
            }else{
                reject('Not Brewed')
            }
        },1000)
    })
}
function haveCoffee(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let coffee=true
            if(coffee){
                resolve('Enjoying my coffee')
            }
            else{
                reject('Not served')
            }    
     
        },1000)
    })
}
boilWater()
.then((res)=>{
    console.log(res)
    return addCoffeePowder()
})
.then((res)=>{
    console.log(res)
    return brewCoffee()
})
.then((res)=>{
    console.log(res)
    return haveCoffee()
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})