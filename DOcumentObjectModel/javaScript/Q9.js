// var obj={
//     val:100
// }
// function fun(){
//     console.log(this.val)
// }
// fun() //answer will be undefined

// var obj={
//     val:100
// }
// function fun(){
//     console.log(this.val)
// }
// obj.fun()

// var obj={
//     val:100
// }
// function fun(){
//     console.log(this.val)
// }
// fun.call(obj)

// var obj={
//     val:100
// }
// function fun(a){
//     console.log(this.val+a)
// }
// fun.call(obj) //output will be Nan

// var obj={
//     val:100
// }
// function fun(a){
//     console.log(this.val+a)
// }
// fun.call(obj,3) //output will be 103

// var obj={
//     val:100
// }
// function fun(a,b,c){
//     console.log(this.val+a+b+c)
// }
// fun.call(obj,3,4,5) //output will be 112

// var obj={
//     val:100
// }
// function fun(a,b,c){
//     console.log(a)
//     console.log(b)
//     console.log(c)

// }
// fun.call(obj,[3,4,5]) //output will be 3,4,5 undefined umdefined


// var obj={
//     val:100

// }
// function fun(a,b,c){
//     console.log(this.val+a+b+c)
// }
// fun.apply(obj,[3,4,5])//output will be 112

var obj={
    val:100
}
function fun(a,b,c){
    console.log(this.val+a+b+c)
}
const fun2=fun.bind(obj)
fun2(1,2,3)//output will be 106


