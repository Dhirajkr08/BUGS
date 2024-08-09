class Student{
    constructor(name,age,marks){
        this.name=name
        this.age=age
        this.marks=marks
    }
    setPlacementAge(minAge){
        return(minMarks)=>{
            if(this.age>minAge && this.marks>minMarks){
                return true
            }
            else{
                return false
            }
        }
    }
}
let amit=new Student('Amit',25,60)
const eligible=amit.setPlacementAge(18)
console.log(eligible(50))

