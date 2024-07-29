function SortArray(arr){
    let count=0
    for(let i=1;i<arr.length;i++){
        let min=i
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
        count+=1


    }
    return count
}
let arr=[7,3,1,5,9]
console.log(SortArray(arr))
//output is 4


