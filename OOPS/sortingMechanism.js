class EMPLOYEE{
    constructor(name,salary){
        this.name=name
        this.salary=salary
    }

}
function bubbleSort(arr){
    let n=arr.length
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j].salary>arr[j+1].salary){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }return arr

}
const emp=[new EMPLOYEE('baba',140),
new EMPLOYEE('raja',110),
new EMPLOYEE('shyam',189),
new EMPLOYEE('arjan',178)]

bubbleSort(emp)
for(let i=0;i<emp.length;i++){
    console.log(emp[i].name,emp[i].salary)
}
