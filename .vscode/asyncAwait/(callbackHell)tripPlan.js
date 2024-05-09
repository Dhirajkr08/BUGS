function buyBike(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let Bike=true;
            if(Bike){
                resolve("Bought Royal Enfield Himalayan")
            } 
            else{
                reject("Still waiting for Bike")
            }       
        },2000)
    })
}
function planTrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let trip=true
            if(trip){
                resolve('Trip to Ladakh planned')
            }else{
                reject("destination not confirmed")
            }
        },1000)
    })
}
function reachLadakh(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let reach=true
            if(reach){
                resolve("Reached Ladakh")
            }else{
                reject("Still in the route")
            }
        },1000)
    })
}
function visitPangongLake(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let visit=true
            if(visit){
                resolve("Visited Pangong Lake")
            }else{
                reject("not visited")
            }
        },1000)
    })
}
buyBike()
.then((res)=>{
    console.log(res)
    planTrip()
    .then((res)=>{
        console.log(res)
        reachLadakh()
        .then((res)=>{
            console.log(res)
            visitPangongLake()
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>console.log(err))
        })
        .catch((err)=>console.log(err))
    })
    .catch((err)=>console.log(err))
})
.catch((err)=>console.log(err))