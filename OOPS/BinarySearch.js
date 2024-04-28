function BinarySearch(nums,target){
    let l=0
    let h=nums.length-1
    while(l<=h){
        let mid=Math.floor((l+h)/2)
        if(nums[mid]===target){
            return mid
        }
        else if(nums[mid]>target){
            h=mid-1
        }
        else{
            l=mid+1
        }
    }return -1
}
function main(){
    let nums=[-1,0,3,5,9,12]
    let target=9
    console.log(BinarySearch(nums,target))
}
main()