function runningSum(nums){
    let ans=[]
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        ans.push(sum)
    }
    return ans
}
let nums=[1,2,3,4]
console.log(runningSum(nums))