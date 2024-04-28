
//linear method

/*function TwoSum(nums,target){
    let dict={}
    for(let i=0;i<nums.length;i++){
        if(target-nums[i] in dict){
            return [dict[target-nums[i]],i]
        }
        dict[nums[i]]=i
    }

}
function main(){
    let nums=[2,7,11,15]
    let target=9
    console.log(TwoSum(nums,target))
}
main()*/

//anothetr o(n)^2
function TwoSum(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
    return none 
}
function main(){
    let nums=[2,7,11,15]
    let target=9
    console.log(TwoSum(nums,target))
}
main()