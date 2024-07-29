class Student{
    constructor(firstName,lastName,age,sex){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.sez=sex
    }
    printFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
    minorOrMajor(){
        if(this.age<18){
            console.log('Minor')
        }
        else{
            console.log('Major')
        }
    }
}

let s=new Student('Dhiraj','Kumar',23,'M')
let j=new Student('Piraj','kumar',24,'M')

s.printFullName()
s.minorOrMajor()
j.printFullName()
j.minorOrMajor()