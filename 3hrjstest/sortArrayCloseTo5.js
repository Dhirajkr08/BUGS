// function sortArrayClosestTo5(arr){
//     arr.sort((a,b)=>{
//         const sortA=Math.abs(a-5)
//         const sortB=Math.abs(b-5)
//         if(sortA===sortB){
//             return a-b
//         }
//         else{
//             return sortA-sortB
//         }
//     })
//     return arr
// }
// let arr=[1,3,5,7,9]
// // console.log(sortArrayClosestTo5(arr))

function arrayClosesto9(arr){
    arr.sort((a,b)=>{
        const sortA=Math.abs(a-9)
        const sortB=Math.abs(b-9)
        if(sortA===sortB){
            return a-b
        }
        else{
            return sortA-sortB
        }
    })
    return arr
}
let arr=[1,7,9,3,6,4]
console.log(arrayClosesto9(arr))
