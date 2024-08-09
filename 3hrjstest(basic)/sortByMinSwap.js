function SortArray(arr){
    let count=0
    for(let i=0;i<arr.length;i++){
        let min=i
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min !==i){
        
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
        count+=1
        }


    }
    return count
}
let arr=[10, 19, 6, 3, 5]
console.log(SortArray(arr))
//output is 4


