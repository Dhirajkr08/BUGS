// var a=50
// {
//     var a=30
//     let b=20
//     let c=30
// }
// console.log(a)

// const a=50
// {
//     var a=30
//     let b=20
//     let c=30
// }
// console.log(a)

// let a =50
// {
//     var a=30
//     let b=20
//     let c=30
// }
// console.log(a)

// var a=50
// function fun(){
//     var a=30
//     let b=20
//     let c=30
// }
// fun();
// console.log(a)

// let a=50
// function fun(){
//     var a=30;
//     let b=20;
//     let c=30;
// }
// fun()
// console.log(a)

// const a=10
// {
//     const a=20
//     {
//         const a =50
//         console.log(a)
//     }
//     console.log(a)
// }
// console.log(a)

// const a=10
// {
//     const a=20
//     {
//         console.log(a)
//     }
//     console.log(a)
// }
// console.log(a)

// function x(){
//     let a=10
//     function y(){
//         console.log(a)
//     }
//     y()
// }
// x()

// function x(){
//     let a=10
//     function y(){
//         return a
//     }
//     console.log(y())
// }
// x()

// function x(){
//     let a =10
//     function y(){
//         console.log(a)
//     }
//     return y

// }
// console.log(x())//output will be refrence of y

// function x(){
//     let a=10
//     function y(){
//         console.log(a)
//     }
//     return y
// }
// const z=x()
// console.log(z())

function x(){
    let a=10;
    function y(){
        console.log(a)
    }
    a=50
    return y;
}
const z=x()
console.log(z())