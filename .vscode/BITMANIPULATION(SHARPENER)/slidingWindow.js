function slidingWindow(nums,k){
    if(!nums){
        return []
    }
    let ans=[]
    for(let i=0;i<nums.length-k;i++){
        let result=nums.slice(i,i+k)
        ans.push(Math.max(...result))
    }
    return ans
}
let nums=[1,3,-1,-3,5,3,6,7]
let k=3
console.log(slidingWindow(nums,k))