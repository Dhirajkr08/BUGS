function buyacar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('buy a car')
        },5000)
    })
}
function planAtrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('plan a trip')

        },2000)
    })
}
function reachManali(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('reached manali')

        },1000)
    })
}
function gotoMountain(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('reached mountain')
        },500)
    })
}

async function trip(){
    const msg=await buyacar();
    console.log(msg)
    const msg2=await planAtrip();
    console.log(msg2)
    const msg3=await reachManali();
    console.log(msg3)
    const msg4=await gotoMountain();
    console.log(msg4)

    
}
trip()