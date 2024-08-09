function findStudentNameByAge(obj,age){
    for(let i in obj){
        if(obj[i]===age){
            return i
        }
    }
    return -1
}
let obj = {
    'yash': 26,
    'vaibhav': 24,
    'rajesh': 25,
};

let age = 25;
console.log(findStudentNameByAge(obj, age)); 
