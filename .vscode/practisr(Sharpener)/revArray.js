// function revArray(arr,length){
//     for(let i=0;i<length/2;i++){
//         let temp=arr[i]
//         arr[i]=arr[length-i-1]
//         arr[length-i-1]=temp
//     }
//     return arr
// }
// let arr=[17,32,9,5,21,14]
// let length=6
// console.log(revArray(arr,length))

// function revArray(arr,length){
//     let i=0
//     let j=length-1
//     while(i<j){
//         let temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         i++
//         j--
//     }
//     return arr
// }
// let length=6
// let arr=[17,32,9,5,21,14]
// console.log(revArray(arr,length)) 

function revArray(arr,length){
    for(let i=0;i<length/2;i++){
        let temp=arr[i]
        arr[i]=arr[length-i-1]
        arr[length-i-1]=temp
    }
    return arr
}
let arr=[17,32,9,5,21,14]
let length=6
console.log(revArray(arr,length))