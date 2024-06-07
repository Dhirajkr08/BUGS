function largestElement(arr){
    let maxi=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxi){
            maxi=arr[i]
        }
    }
    return maxi
}
let arr=[12,7,31,18,25]
console.log(largestElement(arr))