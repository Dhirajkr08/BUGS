function missingNumber(nums){
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==i){
            return i
        }
    }
    return nums.length
}
let nums=[9 ,6 ,4 ,2 ,3 ,5 ,7 ,0 ,1]
console.log(missingNumber(nums))