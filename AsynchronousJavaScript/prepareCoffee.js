const boilerWater=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let water=Math.random()>0.5
            if(water){
                resolve('Water boiled')
            }
            else{
                reject('Not Boiled')
            }
        }, 2000);
    })
}
const addCoffeePowder=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let coffeePowder=Math.random()>0.5
            if(coffeePowder){
                resolve('Added coffee powder')
            }
            else{
                reject('Still need to add coffee powder')
            }
        },500)
    })
}
const brewCoffee=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let brew=Math.random()>0.5
            if(brew){
                resolve('Brewed coffee')
            }
            else{
                reject('Not Brewed')
            }
        },1000);
    })
}
const haveCoffee=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let served=Math.random()>0.5
            if(served){
                resolve('Enjoying my coffee')
            }
            else{
                reject('still waiting')
            }
        },3000)
    })
}
var display=async()=>{
    try{
        const msg=await boilerWater()
        console.log(msg)
        const coffeeMsg=await addCoffeePowder()
        console.log(coffeeMsg)
        const brewMsg=await brewCoffee()
        console.log(brewMsg)
        const serveMsg=await haveCoffee()
        console.log(serveMsg)
    }
    catch(err){
        console.error(err)
    }
}
display()