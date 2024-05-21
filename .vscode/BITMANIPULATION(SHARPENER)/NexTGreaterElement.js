function NextGraterEle(nums){
    nums=nums.concat(nums)
    let stack=[]
    let size=nums.length
    let ans=new Array(size).fill(-1)
    for(let i=0;i<size;i++){
        while(stack.length && nums[stack[stack.length-1]]<nums[i]){
            ans[stack.pop()]=nums[i]
        }
        stack.push(i)
    }
    return ans.slice(0,size/2)
}
let nums=[1,2,1]
console.log(NextGraterEle(nums))
//output should be [2,-1,2]