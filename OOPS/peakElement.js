function PeakElement(nums){
    let l=0
    let h=nums.length-1
    while(l<h){
        let mid=Math.floor((l+h)/2)
        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]){
            return mid
        }
        else if(nums[mid]>nums[mid+1]){
            h=mid-1
        }
        else{
            l=mid+1
        }
    }
    return l

}
function main(){
    let nums=[1,2,3,1]
    console.log(PeakElement(nums))
}
main()