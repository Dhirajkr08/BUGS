// function reverseString(str){
//     let rev=''
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i]
//     }
//     return rev
// }
// let str='Ram'
// console.log(reverseString(str))

function reverseString(str){
    let rev=''
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    return rev
}
let str='Hello'
console.log(reverseString(str))