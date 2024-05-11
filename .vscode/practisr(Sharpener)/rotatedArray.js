function rotatedArray(nums,k){
    for(let i=0;i<k;i++){
        const num=nums.pop()
        nums.unshift(num)
    }
    return nums

}
let nums=[1,2,3,4,5,6,7]
let k=3
console.log(rotatedArray(nums,k))