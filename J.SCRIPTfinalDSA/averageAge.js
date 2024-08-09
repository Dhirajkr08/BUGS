// function findAverageAge(studentObj){
//     let total=0
//     let count=0
//     for(let i in studentObj){
//         total+=studentObj[i]
//         count++
//     }
//     let ans=total/count
//     return ans


// }    
// let studentObj={
//     'yash': 26,
//     'vaibhav': 24,
//     'rajesh' : 25,
// }
// console.log(findAverageAge(studentObj))


// class student{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }
// function findAverageAge(obj){
//     let total=obj.reduce((a,b)=>a+b.age,0)
//     let average=total/obj.length
    
//     return average
// }
// let studentObj=[
//     new student('yash',26),
//     new student('vaibhav', 24),
//     new student('rajesh', 25)
// ]
// console.log(findAverageAge(studentObj))


function findAvg(obj){
    let total=0
    let count=0
    for(let i in obj){
        total+=obj[i]
        count++
    }
    let average=total/count
    return average
}
let studentObj={
    'yash': 26,
    'vaibhav': 24,
    'rajesh' : 25,
}
console.log(findAvg(studentObj))
