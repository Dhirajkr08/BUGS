// a()
// b()
// function a(){
//     console.log('inside a')
// }
// var b=function (){
//     console.log('inside b')
// } //output will be error

// function a(){
//     console.log('inside a')
// }
// var b=function abc(){
//     console.log('inside b')
// }
// a()
// abc()//abc is not defined

// function fun(a){
//     console.log(a)
// }
// var b=10;
// fun(b)
//output will be 10

// function fun1(){
//     console.log('a')
//     return ()=>{
//         console.log('b')
//     }
// }
// fun1() //output: a is params and b is argument

// function fun1(){
//     var a=10
//     return ()=>{
//         a=20
//         console.log(a)
//     }
// }
// fun1()()//output will be 20

// function fun1(a){
//     return()=>{
//         a=a+20
//         console.log(a)
//     }
// }
// fun1(10)(20)//output will be 30

// function fun1(a){
//     return (b)=>{
//     a=a+b
//     console.log(a)
// }}
// fun1(10)(30)//output is 40

function fun1(a){
    const fun2=(b)=>{
        a=a+b
        console.log(a)
    }
}
fun1(10)(30)



