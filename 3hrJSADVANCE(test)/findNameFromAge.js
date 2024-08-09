class student{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
function findNameFromAge(obj,age){
    for(let intro in obj){
        if(obj[intro]===age){
            return intro
        }
    }
}
let students={
    'aman':25,
    'sumit':26,
    'arjun':24,
    'pathak':24,
}
let age=24
const nameDetails=student.findNameFromAge(students,age)
console.log(nameDetails)
