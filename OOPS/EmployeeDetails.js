class Employee{
    constructor(name,year_of_joining,address){
        this.name=name
        this.year_of_joining=year_of_joining
        this.address=address
    }
    printDetails(){
        console.log(`${this.name}   ${this.year_of_joining}    ${this.address}`)
    }
}
emp=new Employee("Robert", 1994,'64C-wallsStreet')
emp1=new Employee('Sam', 2000  , '68D-WallsStreet' )
emp2=new Employee('John', 1999, '26B-WallsStreet')
emp.printDetails()
emp1.printDetails()
emp2.printDetails()