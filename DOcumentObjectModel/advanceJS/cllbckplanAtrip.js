function buyacar(callback){
    setTimeout(()=>{
        console.log('Buy a Car')
        callback()
    },10000)
}
function planAtrip(callback){
    setTimeout(()=>{
        console.log('Plan a Trip')
        callback()
    },2000)
}
function reachManali(callback){
    setTimeout(()=>{
        console.log('Reached Manali')
        callback()
    },1000)

}
function gotoMountain(){
    setTimeout(()=>{
        console.log('reached mountain')
    },500)
}

buyacar(function(){
    planAtrip(function(){
        reachManali(function(){
            gotoMountain()
        })
    })
})