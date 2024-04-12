const studentObj={
    'yash': 26,
    'vaibhav': 24,
    'rajesh': 25,
}
const age=29
function findStudent(obj,age){
    for (let i in obj){
        if(obj[i]===age){
            return i
        }
    }
    return -1
}
const foundStudent=findStudent(studentObj,age)
console.log(foundStudent)
