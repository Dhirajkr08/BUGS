function averageAge(obj){

    let values=Object.values(obj)
    let total=values.reduce((a,b)=>a+b,0)
    let averageAge=total/values.length
    let count=0
    for(let i of values){
        if(i===averageAge){
            count++
        }
    }
    return count

    
}
const obj={
    'Alice' :22,
    'Bob' : 24,
    'chhole':24
}

console.log(averageAge(obj))