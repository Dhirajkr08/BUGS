function maxSubArray(arr){
    let maxi=arr[0]
    let total=arr[0]
    for(let i=0;i<arr.length;i++){
        maxi=Math.max(arr[i],maxi+arr[i])
        if(maxi>total){
            total=maxi
        }
    }
    return total
}
function main(){
    let nums = [-2,1,-3,4,-1,2,1,-5,4]
    console.log(maxSubArray(nums))
}
main()