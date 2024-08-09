function findStudentWithAge(obj,age){
    let arr=[]
    for(let i in obj){
        if(obj[i]===age){
            arr.push(i)
        }
    }
    if(arr.length>0){
        return arr
    }
    else{
        return -1
    }
}
let obj={
    'yash': 26,
    'vaibhav': 24,
    'rajesh' : 25,
    'gunjan':24
}
let age=24
console.log(findStudentWithAge(obj,age))