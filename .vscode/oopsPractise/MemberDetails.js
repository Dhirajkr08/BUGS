class Member{
    constructor(name,age,phoneNumber,address,salary){
        this.name=name
        this.age=age
        this.phoneNumber=phoneNumber
        this.address=address
        this.salary=salary
    }
    printSalary(){
        console.log(`Salary: ${this.salary}`)
    }
}
class Employee extends Member{
    constructor(name,age,phoneNumber,address,salary,specialization){
        super(name,age,phoneNumber,address,salary)
        this.specialization=specialization

    }
    printDetails(){
        console.log(`Employee: ${this.name}, Specialization: ${this.specialization}`)

    }
}
class Manager extends Member{
    constructor(name,age,phoneNumber,address,salary,department){
        super(name,age,phoneNumber,address,salary)
        this.department=department
    }
    printDetails(){
        console.log(`Name: ${this.name}, Department: ${this.department}`)
    }
}
const e1=new Employee('Dhiraj',21,456,'patna','$2000','developer')
e1.printDetails()
e1.printSalary()
const m1=new Manager('DRJ',29,3455,'patna','$4500','fullStack')
m1.printDetails()
m1.printSalary()