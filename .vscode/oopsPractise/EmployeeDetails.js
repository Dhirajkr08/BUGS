class Employee{
    constructor(name,year_of_joining,address){
        this.name=name;
        this.year=year_of_joining
        this.address=address
    }
    printDetails(){
        console.log(`${this.name} ${this.year} ${this.address}`)
    }
}
const Emp1=new Employee("Robert",1994, '64C-WallsStreet')
const Emp2=new Employee("Sam",2000,'68D-WallsStreet')
const Emp3=new Employee('John', 1999, '26B-WallsStreet')
Emp1.printDetails()
Emp2.printDetails()
Emp3.printDetails()