function GoodPairs(nums){
    let count=0
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]===nums[j]){
                count++
            }
            
        }
    }return count
}
function main(){
    let nums=[1,2,3,1,1,3]
    console.log(GoodPairs(nums))
}
main()