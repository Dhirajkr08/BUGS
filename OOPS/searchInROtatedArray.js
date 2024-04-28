function rotatedArray(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            return i
        }
    }
    return -1

}
function main(){
    let nums=[4,5,6,7,0,1,2]
    let target=0
    console.log(rotatedArray(nums,target))

}
main()