function buyBike(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let bike='true';
            if(bike){
                resolve('Bought Royal Enfield Himalayan')
            }else{
                reject('you need to buy a bike first')
            }

        },2000)
    })
}
function planTrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let trip=true;
            if(trip){
                resolve('Trip to Ladakh planned')
            }else{
                reject('plan cancelled')
            }

        },1000)
    })
}
function reachLadakh(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let arrived='true'
            if(arrived){
                resolve('Reached Ladakh')
            }else{
                reject('Not Reached')
            }

        },1000)
    })
}
function visitPangongLake(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let visited=true;
            if(visited){
                resolve('Visited Pangong Lake')
            }else{
                reject('Not Visited')
            }

        },500)

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
            .catch((err)=>console.error(err))
        })
        .catch((err)=>console.error(err))
    })
    .catch((err)=>console.error(err))
})
.catch((err)=>console.error(err))