function moreOccurAndInt(nums){
    nums.sort((a,b)=>a-b)
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            arr.push(nums[i])
        }
    }
    return arr
}
let arr=[4, 3, 2 ,7 ,8, 2, 3, 1]
console.log(moreOccurAndInt(arr))