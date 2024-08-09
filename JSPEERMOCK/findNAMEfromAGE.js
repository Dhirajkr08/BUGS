function findName(object,age){
    //let obj=Object.values(object)
    for(let i in obj){
        if(obj[i]===age){
            return i
        }
    }
    return -1

}
let obj= {

    'yash': 26,
    
    'vaibhav': 24,
    
    'rajesh' : 25,
    
    }
let age=25
console.log(findName(obj,age))    