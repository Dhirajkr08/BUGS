// class Student{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }

// }
// function findAverage(obj){
//     let total=0
//     for(let i=0;i<obj.length;i++){
//         total+=obj[i].age

//     }
//     let average=total/obj.length
//     let count=0
//     for(let i=0;i<obj.length;i++){
//         if(obj[i].age===average){
//             count++
//         }
//     }
//     return count
// }
// let obj=[
//     new Student('yash', 26),
//     new Student('vaibhav', 24),
//     new Student('rajesh', 25),
//     new Student('shyam', 26),
//     new Student('ram', 24),
//     new Student('bhola', 25)
// ];
// console.log(findAverage(obj))

class Student{
    constructor(name,age){
        this.name=name
        this.age=age
    }

}
function findAverageStudentCount(obj){
    let total=obj.reduce((sum,Student)=>sum+Student.age,0)
    let average=total/obj.length
    let count=0
    for(let i=0;i<obj.length;i++){
        if(obj[i].age===average){
            count++
        }
    }
    return count
}
let obj=[
    new Student('yash', 26),
    new Student('vaibhav', 24),
    new Student('rajesh', 25),
    new Student('shyam', 26),
    new Student('ram', 24),
    new Student('bhola', 25)
];
console.log(findAverageStudentCount(obj))
