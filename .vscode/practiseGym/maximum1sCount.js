function Max1sCount(nums){
    let current=0
    let maxi=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            current++
            maxi=Math.max(maxi,current)
        }
        else{
            current=0
        }
    }
    return maxi
}
let nums=[1,0,1,1,1,0,1,1,1,1]
console.log(Max1sCount(nums))