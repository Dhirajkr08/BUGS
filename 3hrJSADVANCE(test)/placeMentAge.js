class Student{
    constructor(name,age,marks){
        this.name=name
        this.age=age
        this.marks=marks
    }
    setPlaceMentAge(minAge){
        return(minMarks)=>{
            return this.age>=minAge && this.marks>=minMarks
        }
    }
}
let students=[
    new Student('Amit',19,46),
    new Student('sumit',23,76),
    new Student('aniket',34,87),
    new Student('Govind',16,66)

]

const minAge=18
const minMarks=45

const eligibleStudent=students.filter(Student=>
Student.setPlaceMentAge(minAge)(minMarks)
)

eligibleStudent.forEach(Student=>console.log(Student.name))