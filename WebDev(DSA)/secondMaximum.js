// function secondMaximum(arr){
//     let n=arr.length
//     let maxi=-Infinity
//     let secondMaxi=-Infinity
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]>maxi){
//             secondMaxi=maxi
//             maxi=arr[i]
//         }
//     }
//     return secondMaxi
// }
// let arr=[1,2,4,1,5,6]
// console.log(secondMaximum(arr))

function secondMaxi(arr){
    let maxi=-Infinity
    let secondMaxi=-Infinity
    let n=arr.length
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxi){
            secondMaxi=maxi
            maxi=arr[i]
        }
    }
    return secondMaxi
}
let arr=[1,2,4,1,5,6]
console.log(secondMaxi(arr))