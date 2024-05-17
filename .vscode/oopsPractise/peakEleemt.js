function peakElement(nums){
    let l=0,h=nums.length-1
    while(l<=h){
        let mid=Math.floor((l+h)/2)
        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]){
            return mid
        }
        else if(nums[mid]>nums[mid+1]){
            return h=mid-1
        }else{
            return l=mid+1
        }
    }
    return l
}
let nums=[1,2,3,1]
console.log(peakElement(nums))