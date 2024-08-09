// function findAverageAgeCount(obj){
//     let object=Object.values(obj)
//     let total=object.reduce((a,b)=>a+b,0)
//     let average=total/object.length

//     let count=0
//     for(let i=0;i<object.length;i++){
//         if(object[i]===average){
//             count++
//         }
//     }
//     return count
// }
// const studentObj = {
//     'yash': 26,
//     'vaibhav': 27,
//     'rajesh': 25
// };
// console.log(findAverageAgeCount(studentObj))

//2nd method

function findAvgAgeCount(object){
    let obj=Object.values(object)
    let total=0
    for(let i=0;i< obj.length;i++){
        total+=obj[i]
        
    }
    let avg=total/obj.length
    let count=0
    for(let i=0;i< obj.length;i++){
        if(obj[i]===avg){
            count++
        }
    }
    return count

    

}
const studentObj = {
        'yash': 26,
        'vaibhav': 27,
        'rajesh': 25
    };

console.log(findAvgAgeCount(studentObj))    

