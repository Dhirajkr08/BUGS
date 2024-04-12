/*
function containDuplicate(nums){
    nums.sort()
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            return true
        }
    }
    return false
}
function main(){
    let nums=[1,2,3,4]
    console.log(containDuplicate(nums))
}
main()

*/

// 2nd method
function containDuplicate(nums){
    let n=new Set(nums)
    if(n.size !== nums.length){
        return true
    }return false

}
function main(){
    let arr=[1,2,3]
    console.log(containDuplicate(arr))
}
main()