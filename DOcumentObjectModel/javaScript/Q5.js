/*console.log(a)
console.log(b)
let a=5
var b=6
console.log(b)
//here the answer is a has already been declared it will give syntax error
*/

/*
console.log(a)
var a=5;
console.log(b)
//here the answer will be a is not defined because var a comes after the console and b is undefined
*/

/*
console.log('a');
console.log('b');
setTimeout(()=> console.log('c'), 1000);
console.log('d');
*/

// console.log('a')
// console.log('b');
// setTimeout(()=>console.log('c'),1000)
// setTimeout(()=>console.log('d'),0)
// console.log('e')


/*
const num=[1,2,3,4]
const double=num.map((num)=>Math.floor(num/3))
console.log(double)
*/


// var arr=[1,2,3,5]
// var newArr=arr.forEach((item,i)=>{
//     return item+i
// })
// console.log(newArr)

var newArr=arr.map((item,i)=>{
    console.log(item+'index'+i)
    return item+i

})
console.log(newArr)