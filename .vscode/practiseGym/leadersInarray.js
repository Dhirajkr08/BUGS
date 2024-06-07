function leaders(nums){
    let arr=[]
    let maxi=nums[nums.length-1]
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]>maxi){
            maxi=nums[i]
            arr.unshift(nums[i])
        }
    }
    arr.push(nums[nums.length-1])
    return arr
}
let arr=[16,17,4,3,5,2]
console.log(leaders(arr))