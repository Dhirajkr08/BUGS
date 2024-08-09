/*function averageAge(obj){
    let count=0
    let total=0
    for(let i in obj){
        total+=obj[i]
        count++
    }
    let average=total/count
    return average
}
let obj={
    'Yash':26,
    'Vaibhav':24,
    'rajesh':25
}
console.log(averageAge(obj))*/

/*function averageAge(obj){
    let count=Object.values(obj)
    let total=count.reduce((a,b)=>a+b,0)
    let average=total/count.length
    return average
}
let obj={
    'Yash':26,
    'Vaibhav':24,
    'rajesh':25
}
console.log(averageAge(obj))*/

function AverageAge(obj){
    let count=0
    let total=0
    for(let i in obj){
        total+=obj[i]
        count++
    }
    let average=total/count
    return average
}
let obj={
    'Yash':26,
    'Vaibhav':24,
    'rajesh':25
}
console.log(AverageAge(obj))