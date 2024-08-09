class Student{
    static count=0
    constructor(name,age,phone,marks) {
        this.name=name
        this.age=age
        this.phone=phone
        this.marks=marks
        Student.count++


        
    }
    eligible(){
        if(this.marks>=40){
            console.log(`Name:${this.name}, Age: ${this.age}, Phone: ${this.phone}, Marks: ${this.marks}`)
        }
        else{
            console.log(`Name: ${this.name} with marks ${this.marks} is not eligible`)
        }
    }
    static printStudentCount(){
        console.log(Student.count)
    }

}

const Hiya=new Student('Hiya',55,'2345',15);
const Diya=new Student('Diya',66,'4567',86);

Student.printStudentCount()
Hiya.eligible()
Diya.eligible()