function rotatedArray(nums,k){
    k%=nums.length
    let temp=new Array(nums.length).fill(0)
    for(let i=0;i<nums.length;i++){
        temp[(i+k)%nums.length]=nums[i]
    }
    for(let i=0;i<nums.length;i++){
        nums[i]=temp[i]
    }
    return nums
}
let nums=[1,2,3,4,5,6,7]
let k=3
console.log(rotatedArray(nums,k))