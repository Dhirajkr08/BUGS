class Student{
    constructor(name,rollNo){
        this.name=name
        this.rollNo=rollNo
    }
    Display(){
        console.log(`Name: ${this.name}, Roll-No: ${this.rollNo}`)
    }
}
const std1=new Student('John Doe',23)
std1.Display()