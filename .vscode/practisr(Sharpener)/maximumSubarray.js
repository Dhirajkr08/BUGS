function maximumSubArray(arr){
    let maxi=arr[0]
    for(let i=0;i<arr.length;i++){
        let sum=0
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
        }
        if(sum>maxi){
            maxi=sum
        }
    }
    return maxi   
}
let arr=[5,2,-4,-5,3,-1,2,3,1]
console.log(maximumSubArray(arr))
