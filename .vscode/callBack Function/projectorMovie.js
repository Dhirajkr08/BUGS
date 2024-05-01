// function projectorPromise(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             let rented=true;
//             if(rented){
//                 resolve('Projector rented successfully')
//             }else{
//                 reject('Error: Projectors out of stock')
//             }
//         },1000)
//     })
// }
// function pizzasPromise(){
//     return new Promise((resolve,reject)=>{
//         let pizza=true;
//         if(pizza){
//             resolve('Pizzas delivered')
//         }else{
//             reject('Error: Pizzas not delivered on time')
//         }
//     },2000)
// }
// function friendsPromise(){
//     return new Promise((resolve,reject)=>{
//         let friendsAvailabe=true;
//         if(friendsAvailabe){
//             resolve('Both friends available')
//         }else{
//             reject('Error: Both friends not available')
//         }
//     },3000)
// }
// Promise.all([projectorPromise(),pizzasPromise(),friendsPromise()])
// .then((res)=>{
//     console.log(res)
//     console.log('Promises resolve successfully')
// })
// .catch((er)=>console.error('Error',er))

//2nd method
const projectorPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let projector=true
        if(projector){
            resolve('Projector rented successfully')
        }else{
            reject('Error:Projector out of stock')
        }
    },3000)
})
const PizzasPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let pizza=true;
        if(pizza){
            resolve('Pizzas delivered on time')
        }else{
            reject('Error:pizzas not delivered on time')
        }
    },500)
})
const friendsPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let bothfriends=true;
        if(bothfriends){
            resolve('Both friends available')
        }else{
            reject('Error: Both friends not available')
        }

    },2000)
})
Promise.all([projectorPromise,PizzasPromise,friendsPromise])
.then((res)=>{
    console.log(res)
    console.log('Promises resolve successfully')
})
.catch((err)=>console.error('Error:',err))