function findaverage(obj){
    let age=Object.values(obj)
    let total=age.reduce((a,b)=>a+b,0)
    let average=total/age.length
    return average
}
const obj={
    'Yash':26,
    'vaibhav':27,
    'rajesh':25
}
console.log(findaverage(obj))
