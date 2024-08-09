// const Name=(arr)=>{
//     let index=0
//     return()=>{
//         if(index<arr.length){
//             console.log(`Hello ${arr[index]}`)
//             index++
//         }
//     }
// }
// let fun=Name(['ram','shyam'])
// fun()
// fun() 


// const obj1={
//     'key1':"value",
//     'key2':'value2',
//     'key3':'value3'
// }
// const obj2={...obj1,'key3':'new Value'}
// console.log(obj2)
//spread operatior copying here from obj1 and and printing for obj2


//merge Array
const arr=[1,2,3,4]
const frr=[2,5,8,7]
const arr2=[...arr,...frr]
console.log(arr2)