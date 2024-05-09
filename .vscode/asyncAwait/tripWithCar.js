// function checkCar(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let car=Math.random()>0.5
//             if(car){
//                 resolve("Car is ready")
//             }else{
//                 reject("Error: Car needs maintenance")
//             }
//         },2000)
//     })
// }
// function packForPicnic(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let lagguage=Math.random()>0.5
//             if(lagguage){
//                 resolve("Packed everything for picnic")
//             }else{
//                 reject("Error: Not have some essentials")
//             }
//         }, 1000);
//     })
// }
// checkCar()
// .then((res)=>{
//     console.log(res)
//     return packForPicnic()
// })
// .then((res)=>{
//     console.log(res)
//     console.log("Go for picnic")
// })
// .catch((err)=>{
//     console.log(err)
//     console.log("Picnic cancelled")
// })

console.log('start');



const promise1 = Promise.resolve().then(() => {

  console.log('promise1');

  const timer2 = setTimeout(() => {

    console.log('timer2')

  }, 0)

});



const timer1 = setTimeout(() => {

  console.log('timer1')

  const promise2 = Promise.resolve().then(() => {

    console.log('promise2')

  })

}, 0)



console.log('end');