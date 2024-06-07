function countOnes(nums,k){
    let left=0
    let count=0
    let maxi=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            count++
        }
        while(count>k){
            if(nums[left]===0){
                count--
            }
            left++
        }
        maxi=Math.max(maxi,i-left)
    }
    return maxi

}
let nums=[1,0,1,0,1,1,1,0,0]
let k=1
console.log(countOnes(nums,k))
