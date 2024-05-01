function boilWater(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let water=true;
            if(water){
                resolve('Water boiled')
            }else{
                reject('Not Boiled yet')
            }
        },2000)
    })
}
function addCoffeePowder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let coffeePowder=true;
            if(coffeePowder){
                resolve('Added coffee powder')
            }else{
                reject('Not Added')
            }
        },500)
    })
}
function brewCoffee(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let Brewed=true;
            if(Brewed){
                resolve('Brewed coffee')
            }else{
                reject('Not Brewed')
            }

        },1000)
    })
}
function haveCoffee(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let served=true;
            if(served){
                resolve('Enjoying my Coffee')
            }else{
                reject('Not served yet')
            }
        },3000)
    })
}
boilWater()
.then((res)=>{
    console.log(res)
    addCoffeePowder()
    .then((res)=>{
        console.log(res)
        brewCoffee()
        .then((res)=>{
            console.log(res)
            haveCoffee()
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>console.error(err))
        })
        .catch((err)=>console.error(err))
    })
    .catch((err)=>console.error(err))
})
.catch((err)=>console.error(err))