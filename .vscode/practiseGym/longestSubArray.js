function longestSubaArray(nums){
    let maxi=0
    let start=0
    let end=new Array(10).fill(-1)
    for(let i=0;i<nums.length;i++){
        const count=nums[i]
        if(end[count]>=start){
            start=end[count]+1
        }
        end[count]=i
        maxi=Math.max(maxi,i-start+1)
    }
    return maxi
}
let nums=[1,2,3,1,2,3,4,5]
console.log(longestSubaArray(nums))