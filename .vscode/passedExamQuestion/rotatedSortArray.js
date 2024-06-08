function sortRotatedArr(nums){
    let l=0
    let h=nums.length-1
    while(l<h){
        let mid=Math.floor((l+h)/2)
        if(nums[mid]>nums[h]){
            l=mid+1
        }
        else{
            h=mid
        }
    }
    return nums[l]
}

let arr=[1,2,3,4,5]
console.log(sortRotatedArr(arr))

