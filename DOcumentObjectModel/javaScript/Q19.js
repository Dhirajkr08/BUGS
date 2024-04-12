function calculateAverage(studentObj){
    let sum=0
    let count=0
    for(let i in studentObj){
        sum+=studentObj[i]
        count++
    }if(count===0){
        return 0
    }
    return sum/count

}
const studentObj={
    'Yash':26,
    'valibhav':24,
    'rajesh':25,
}
const average=calculateAverage(studentObj)
console.log('average age =',average)

