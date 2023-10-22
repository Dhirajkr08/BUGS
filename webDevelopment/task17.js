function student(firastName,lastName,rollNumber,age){
    this.firastName=firastName
    this.lastName=lastName
    this.rollNumber=rollNumber
    this.age=age
}
function printFullName(student){
    console.log(student.firastName+student.lastName)

}
function minorORmajor(student){
    if(student.age>=18){
        console.log('major')
    }
    else{
        console.log('minor')
    }
}
const person1= new student('Yash','Singh',23,25)
const person2=new student('harsh','singh',12,17)

printFullName(person1)
minorORmajor(person1)
printFullName(person2)
minorORmajor(person2)