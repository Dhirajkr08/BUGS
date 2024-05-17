function runningSum(nums){
    let arr=[]
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        arr.push(sum)
    }
    return arr
}
let nums=[1,2,3,4]
console.log(runningSum(nums))
