function buyBike(cb){
    setTimeout(()=>{
        console.log('Bought Royal Enfield Himalayan')
        cb()
    },2000)

}
function planTrip(){
    setTimeout(()=>{
        console.log('Trip to Ladakh planned')
    },1000)
}
buyBike(planTrip)