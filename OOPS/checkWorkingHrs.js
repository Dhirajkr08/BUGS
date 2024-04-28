class Employee{
    getInfo(salary,working_hours){
        this.salary=salary
        this.working_hours=working_hours
    }
    AddSal(){
        if(this.salary<500){
            this.salary+=10
        }
    }
    AddWork(){
        if(this.working_hours>6){
            this.salary+=5
        }
    }
}
const e1=new Employee()
e1.getInfo(550,7)
e1.AddSal()
e1.AddWork()
console.log(e1.salary)