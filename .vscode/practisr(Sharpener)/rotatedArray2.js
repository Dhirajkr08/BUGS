// function rotatedArray(nums,k){
//     for(let i=0;i<k;i++){
//         const num=nums.pop()
//         nums.unshift(num)
//     }
//     return nums

// }
// let nums=[1,2,3,4,5,6,7]
// let k=3
// console.log(rotatedArray(nums,k))

//2nd method
function rotatedArray(nums, k) {
    k = k % nums.length;
    nums.splice(0,nums.length, ...nums.slice(-k), ...nums.slice(0,-k))
    return nums
}

let ar = [1, 2, 3, 4, 5, 6, 7];
const v = 3;
console.log(rotatedArray(ar, v)); 
//expected output should be [5,6,7,1,2,3,4]