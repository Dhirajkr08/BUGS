class Employee{
    getInfo(salary,working_hr){
        this.salary=salary
        this.working_hr=working_hr
    }
    AddSal(){
        if(this.salary<500){
            this.salary+=10
        }
    }
    AddWork(){
        if(this.working_hr>6){
            this.salary+=5
        }
    }    
}
const E1=new Employee()
E1.getInfo(450,7)
E1.AddSal()
E1.AddWork()
console.log(E1.salary)