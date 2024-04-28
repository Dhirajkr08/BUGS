class MEMBER{
    constructor(name,age,number,address,salary){
        this.name=name
        this.age=age
        this.number=number
        this.address=address
        this.salary=salary
    }
    printSalary(){
        console.log(`Salary: ${this.salary}`)
    }
}
class EMPLOYEE extends MEMBER{
    constructor(name,age,number,address,salary,specialization){
        super(name,age,number,address,salary)
        this.specialization=specialization
    }
    printDetails(){
        console.log(`Employee Name: ${this.name}, Specialization: ${this.specialization}`)
        this.printSalary()

    }
}
class MANAGER extends MEMBER{
    constructor(name,age,number,address,salary,department){
        super(name,age,number,address,salary)
        this.department=department
    }
    printDetails(){
        console.log(`Manager Name: ${this.name}, Department: ${this.department}`)
        this.printSalary()
    }
}
const emp=new EMPLOYEE('John Doe', 30, '1234567890', '123 Main St', 50000, 'Software Development')
const mng=new MANAGER('Jane Doe', 40, '0987654321', '456 Park Ave', 70000, 'Human Resources')
emp.printDetails()
mng.printDetails()