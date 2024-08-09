const buyBike=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let bike=true//Math.random()>0.5
            if(bike){
                resolve("Bought Royal Enfield Himalayan")
            }
            else{
                reject("still have to buy")
            }
        },2000)
    })
}
const planTrip=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let trip=true//Math.random()>0.5
            if(trip){
                resolve('Trip to Ladakh planned')
            }
            else{
                reject('Not planned yet')
            }
        },1000)
    })
}
const readchedLadakh=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let arrived=true//Math.random()>0.5
            if(arrived){
                resolve('Reached Ladakh')
            }
            else{
                reject('still in the route')
            }
        },1000)
    })
}
const visitPangonLake=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let pangong=true//Math.random()>0.5
            if(pangong){
                resolve('Visited Pangong Lake')
            }
            else{
                reject('Not visited')
            }
        },500)
    })
}
// buyBike()
// .then((res)=>{
//     console.log(res)
//     return planTrip()
    
// })
// .then((res)=>{
//     console.log(res)
//     return readchedLadakh()
// })
// .then((res)=>{
//     console.log(res)
//     return visitPangonLake()
// })
// .catch((err)=>console.log(err))

var display=async()=>{
    try{
        let msg=await buyBike()
        console.log(msg)
        let Tripmsg=await planTrip()
        console.log(Tripmsg)
        let manaliMsg=await readchedLadakh()
        console.log(manaliMsg)
        let visitedMsg=await visitPangonLake()
        console.log(visitedMsg)
    }
    catch(err){
        console.log(err)
    }
}
display()