//By using Fat Arrow


/*var BuyBike=(callback)=>{
    setTimeout(()=>{
        console.log("Bought Royal Enfield Himalayan")
        callback()
    },2000)
}
var planTrip=(callback)=>{
    setTimeout(()=>{
        console.log("Trip to Ladakh planned")
        callback()
    },1000)
}
BuyBike(()=>{
    planTrip(()=>{

    })
})*/

//By using function 


/*function BuyBike(callback){
    setTimeout(()=>{
        console.log('Bought Royal Enfield Himalayan')
        callback()
    },2000)
}
function planTrip(callback){
    setTimeout(()=>{
        console.log('Trip to Ladakh planned')
        
        
    },1000)
}
//BuyBike(planTrip)
BuyBike(()=>{
    planTrip(()=>{})
})*/


//used async await resolve and reject promises using funtion

/*function BuyBike(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Bought Royal Enfield Himalayan')
            resolve()
        },2000)
    })
}
function planAtrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Trip to ladakh planned')
            resolve()
        },1000)
    })
}
async function display(){
    try{
        await BuyBike()
        await planAtrip()
    }
    catch(er){
        console.log(er)
    }
}
display()*/

//async await promises and resolve reject using fat arrow
var BuyBike=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Bought Royal Enfield Himalayan')
            resolve()
        },2000)
    })
}
var planAtrip=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Trip to Ladakh planned')
            resolve()
        },1000)
    })

}
var display=async()=>{
    await BuyBike()
    planAtrip()
}
display()




