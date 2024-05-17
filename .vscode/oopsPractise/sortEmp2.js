class Employee{
    constructor(Name,Salary){
        this.name=Name
        this.Salary=Salary
    }
}
function sortSalary(emp){
    return emp.sort((a,b)=>
        a.Salary-b.Salary)
}
const arr=[new Employee('Dhiraj',989),
    new Employee('Niraj',367),
    new Employee('Raj',123),
    new Employee('Saj',1089)
]
const output=sortSalary(arr)
for(let i of output){
    console.log(i.name,i.Salary)
}