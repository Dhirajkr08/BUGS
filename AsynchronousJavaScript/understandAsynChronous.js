/*console.log('start')
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
})
console.log('end')// output will be {start,1,end}
*/

/*console.log('start')
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
    resolve(2)
})
promise1.then(res=>console.log(res))
console.log('end')*/
// here we all know start will print first 
//then it will console 1 and after executing end 2 will print. 


/*console.log('start')
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
    resolve(2)
    console.log(3)
})
promise1.then(res=>{
    console.log(res)
})
console.log('end');*/

/*console.log('start')
const fn=()=>(new Promise((resolve,reject)=>{
    console.log(1)
    resolve('success')
}))
console.log('middle')

fn().then(res=>{
    console.log(res)
})
console.log('end')*/

/*console.log('start')
Promise.resolve(1).then((res)=>{
    console.log(res)
})
Promise.resolve(2).then((res)=>{
    console.log(res)
})
console.log('end')//output will "start,end,1,2"
*/

/*console.log('start')
setTimeout(()=>{
    console.log('setTimeout')
})
Promise.resolve().then(()=>{
    console.log('resolve')
})
console.log('end')*/

/*const promise=new Promise((resolve,reject)=>{
    console.log(1)
    setTimeout(()=>{
        console.log('timerStart')
        resolve('success')
        console.log('timerEnd')
    },0)
    console.log(2)
})
promise.then((res)=>{
    console.log(res)
})
console.log(4)*/  //output will be 1,2,4,timerStart,timerEnd,success

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
//in this case timer1 will print first and then it will print promise coz it's under the timer1 settimeout and then timer2
*/


console.log('start')
const promise1=Promise.resolve().then(()=>{
    console.log('promise1')
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