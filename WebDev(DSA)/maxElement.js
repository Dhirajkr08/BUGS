function maxElement(arr){
    let maxi=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxi){
            maxi=arr[i]
        }
    }
    return maxi
}
let n=[-1,-2,-3,-2,-4]
console.log(maxElement(n))