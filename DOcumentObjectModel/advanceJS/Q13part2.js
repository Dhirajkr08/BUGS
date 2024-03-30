/*
function BuyAcar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Buy a Car')

        },3000)
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
            resolve('arrived Manali')
        },1500)
    })
}
function gotoMountain(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('go to the famous Mountain')
        },1000)
    })
}
async function main(){
    try{
        const a= await BuyAcar()
        console.log(a)
        const b=await planAtrip()
        console.log(b)
        const c=await reachManali()
        console.log(c)
        const d=await gotoMountain()
        console.log(d)

    }
    catch(err){
        console.error('ERROR:YOU are getting an error',err)

    }
    
}
main()
*/


/*const PlanAtrip=async()=>{
    const buyacar=new Promise((resolve,reject)=>
    setTimeout(()=>resolve('car'),3000)
    );
    const trip=new Promise((resolve,reject)=>
    setTimeout(()=>resolve('manali'),2000))
    const reach=new Promise((resolve,reject)=>
    setTimeout(()=> resolve('reached manali'),1000))
    const mountain=new Promise((resolve,reject)=>setTimeout(()=>resolve('go to the famous mountain'),500))

    try{
        const atrip=await buyacar;
        const [vechicle,destination,arrival,famous]=await Promise.all([buyacar,trip,reach,mountain])
        console.log(`${vechicle},${destination},${arrival},${famous}`)
        return atrip
    }
    catch(err){
        console.log('Error occured:',err)
        throw err
    }
}
PlanAtrip()*/


/*
const planAtrip=async()=>{
    const buyCar=new Promise((resolve,reject)=>setTimeout(()=> resolve('buy car'),3000));
    const location=new Promise((resolve,reject)=>setTimeout(()=>resolve("let's go Manali"),2000));
    const arrival=new Promise((resolve,reject)=>setTimeout(()=>resolve('we reached manali'),1500));
    const favLocation=new Promise((resolve,reject)=>setTimeout(()=>resolve('go to the famous mountain'),1000));

try{
    const [car,place,reach,destination]=await Promise.all([buyCar,location,arrival,favLocation]);
    console.log(`${car},${place},${reach},${destination}`);

}catch(error){
    console.log('ERROR: you are getting an error');
}

}
planAtrip();

*/

/*
console.log('start')
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
})
console.log('end')
*/

/*
console.log('start')
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
    resolve(2)
})
promise1.then(res=>{
    console.log(res)
})
console.log('end');
*/

/*
console.log('start');
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
    resolve(2)
    console.log(3)
})
promise1.then(res=>{
    console.log(res)
})
console.log('end');
*/

/*
console.log('start')

const fn=()=>(new Promise((resolve,rejct)=>{
    console.log(1)
    resolve('success')
}))
console.log('middle')
fn().then(res=>{
    console.log(res)
})
console.log('end')
*/

/*
console.log('start')
Promise.resolve(1).then((res)=>{
    console.log(res)
})
Promise.resolve(2).then((res)=>{
    console.log(res)
})
Promise.resolve(2).then((res)=>{
    console.log(res)
})
console.log('end')
*/

/*
console.log('start')
setTimeout(()=>{
    console.log('set Timeout')
})
Promise.resolve().then(()=>{
    console.log('resolve')
})
console.log('end')
*/

/*
const promise=new Promise((resolve,reject)=>{
    console.log(1)
    setTimeout(()=>{
        console.log('timeStart')
        resolve('success')
        console.log('timerEnd')
    },0)
    console.log(2)
})
promise.then((res)=>{
    console.log(res)
})
console.log(4)
*/

/*
const timer1=setTimeout(()=>{
    console.log('timer1')

    const promise1=Promise.resolve().then(()=>{
        console.log('promise1')
    })
},0)
const timer2=setTimeout(()=>{
    console.log('timer2')

},0)
*/
console.log('start')
const promise1=Promise.resolve().then(()=>{
    console.log('promise1');
    const timer2=setTimeout(()=>{
        console.log('timer2')
    },0)
})

const timer1=setTimeout(()=>{
    console.log('timer1')
    const promise2=Promise.resolve().then(()=>{
        console.log('promise2')
    })
},0)
console.log('end')
