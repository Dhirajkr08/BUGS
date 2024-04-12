class student{
    constructor(name,age,marks){
        this.name=name
        this.age=age
        this.marks=marks
    }
    setPlacementAge(minPlacementAge){
        return (minMarks)=>{
            if(this.marks>=minMarks && this.age>=minPlacementAge){
                return true
            }else{
                return false
            }
        }
    }
}
function createNewStudent(name,age,marks){
    const DRJ=new student(name,age,marks)
    console.log(DRJ.setPlacementAge(18)(40))

}
createNewStudent('Amit',20,65)
