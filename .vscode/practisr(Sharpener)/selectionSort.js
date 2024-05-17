function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let temp=i
        for(let j=i;j<arr.length;j++){
            if(arr[j]>arr[temp]){
                temp=j
            }
        }
        let d=arr[i]
        arr[i]=arr[temp]
        arr[temp]=d
    }
    return arr
}

let temp=[1,2,3,4,5]
console.log(selectionSort(temp))