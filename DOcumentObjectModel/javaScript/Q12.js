class Student{
    static count=0
    constructor(name,age,ph_no,marks){
        this.name=name
        this.age=age
        this.ph_no=ph_no
        this.marks=marks

        Student.increaseStudentCount()
    }
    eligible(){
        if(this.marks>=40){
            console.log(`${this.name} age${this.age} is eligible`)
        }
        else if(this.marks){
            console.log(`${this.name} age ${this.age} is not eligible`)

        }
    }
    static increaseStudentCount(){
        Student.count++
    }
    static printStudentCount(){
        console.log(Student.count)
    }
}
function createNewStudent(){
    const Riya=new Student('Riya',18,1234,34)
    const Hiya=new Student('Hiya',21,2345,56)
    Student.printStudentCount()
    Riya.eligible()
    Hiya.eligible()
}
createNewStudent()
