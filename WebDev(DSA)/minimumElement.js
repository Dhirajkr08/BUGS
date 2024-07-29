function minimumElement(arr){
    let mini=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<mini){
            mini=arr[i]
        }
    }
    return mini
}
let a=[1,-2,-3,6,3,7]
console.log(minimumElement(a))