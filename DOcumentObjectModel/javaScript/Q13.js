// Q1: ans:- javascript was basically created for handle event on browser and 
//  and originally created for enhance the interaction of browser 
//  by the help of DOM,asynchronous,event DeviceOrientationEvent,
//  simplycity and cosistent"

// setTimeout(()=>console.log('timer expired'),1000)
// function x(y){
//     console.log('inside x');
//     y()
// }
// x(function y(){
//     console.log('inside y')
// })


// setTimeout(()=>console.log('timer1,expired'),1000)
// setTimeout(()=>console.log('timer2 expired'),0)
// function x(y){
//     console.log('inside x')
// y()    
// }
// x(function y(){
//     console.log('inside y')
//})

// setTimeout(()=>console.log('timer1 expired'),1000)
// setTimeout(()=>console.log('timer2 expired'),0)
// function x(y){
//     console.log('inside x')
// y()    
// }
// x(function y(){
//     setTimeout(()=>console.log('inside y'),0)
// })

//window.addEventListener("DOMCONTENTLOADED",()=>{console.log('DOM has loaded')})
document.addEventListener("DOMCONTENTLOADED",()=>{console.log('DOM has loaded')})

/*
why we use garbage collector?
garbage collector in js is an essential mechanism
for managing memory resources preventing memory leak and ensuring
efficent memory usage it is an automate process to reclaim 
unused memory that is no longer in use.

*/