function findStudent(obj,age){
    for(let i in obj){
        if(obj[i]===age){
            return i
        }
    }
    return -1

}
let obj={
    'yash':23,
    "roy":24,
    'soy':11
}
let age=24
console.log(findStudent(obj,age))