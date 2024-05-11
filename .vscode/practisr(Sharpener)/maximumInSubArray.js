function maximumSumInSubarray(arr){
    let maxSum=arr[0]
    for(let i=0;i<arr.length;i++){
        let sum=0
        for(let j=i;j<arr.length;j++){
            sum=sum+arr[j]
            if(sum>maxSum){
                maxSum=sum
            }
        }
    }
    return maxSum
}
let arr=[5,2,-4,-5, 3,-1,2,3,1]

console.log(maximumSumInSubarray(arr))