// var student=function(name){
//     this.name=name;
//     function printName(){
//         console.log(this.name)
//     }
//     printName()
// }
// var DRJ=new student('Dhiraj')

// var fun=a=>a
// var a=10
// console.log(fun(a))//output is 10

// var fun=a=>a
// console.log(fun(a))
// var a=10//output will be undefined


// var fun=a=>{a}
// var a=10
// console.log(fun(a))//undefined


// var fun=(a,b)=>{
//     var sum=a+b
//     return sum
// }
// var a=10
// var b=20
// console.log(fun(a,b))//output will be 30

// var fun=(a,b)=>
// var sum=a+b
// return sum
// var a=10
// var b=20
// console.log(fun(a,b))//error

// var student=function(name){
//     this.name=name
//     function printName(){
//         console.log(this.name)
//     }
//     printName()
// }
// var yash=new student('Dhiraj')//output will be undefined

var student=function(name){
    this.name=name
    var printName=()=>{
        console.log(this.name)
    }
    printName()

}
var DRJ=new student('Dhiraj')//output will be Dhiraj



