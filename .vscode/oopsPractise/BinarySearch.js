function BinarySearch(nums,target){
    let left=0,right=nums.length-1
    while(left<=right){
        let mid=parseInt(left+right)/2
        if(nums[mid]===target){
            return mid
        }
        else if(nums[mid]>target){
            right=mid-1
        }else{
            left=mid+1
        }
    }return -1
}
let nums=[-1,0,3,5,9,12]
let target=2
console.log(BinarySearch(nums,target))