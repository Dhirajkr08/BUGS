// function averageAge(obj){
//     let average=0
//     let total=0
//     for(let i of obj){
//         average+=obj[i]
//         total++
//     }
//     let ans=average/total
//     return ans
// }
// let obj={
//     'yash':26,
//     'Vaibhav':24,
//     'rajesh':25
// }
// console.log(averageAge(obj))

function averageAge(obj){
    let total=0
    let count=0
    for(let i in obj){
        total+=obj[i]
        count++
    }
    let average=total/count
    return average
}
let obj={
    'alice':26,
    'bob':28,
    'krick':25,
    'aadi':24
}
console.log(averageAge(obj))