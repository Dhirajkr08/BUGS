class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary
    }
}
function bubbleSort(emp){
    for(let i=0;i<emp.length;i++){
        for(let j=0;j<emp.length-i-1;j++){
            if(emp[j].salary>emp[j+1].salary){
                let temp=emp[j].salary
                emp[j].salary=emp[j+1].salary
                emp[j+1].salary=temp
                
            }
        }    
    }
    return emp

}
const emp=[new Employee('Babu',250),
    new Employee('Gaurav',189),
    new Employee('saurav',320)


]
sortedEmp=bubbleSort(emp)
for (let i of sortedEmp){
    console.log(i.name,i.salary)
}