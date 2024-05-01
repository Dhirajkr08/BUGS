/*
function concatenationArray(nums){
    let len=nums.length
    for(let i=0;i<len;i++){
        nums.push(nums[i])
    }
    return nums
}
function main(){
    let nums=[1,2,1]
    console.log(concatenationArray(nums))
}
main()
*/

/*
function shuffleArray(nums,n){
    let arr=[]
    for(let i=0;i<n;i++){
        arr.push(nums[i],nums[n+i])
    }
    return arr
}
function main(){
    let nums=[2,5,1,3,4,7]
    let n=3
    console.log(shuffleArray(nums,n))
}
main()
*/

/*
function greatestCandies(candies,extra){
    let maxi=Math.max(...candies)
    let arr=[]
    for(let i=0;i<candies.length;i++){
        arr.push(candies[i]+extra>=maxi)
    }
    return arr

}
function main(){
    let candies=[2,3,5,1,3]
    let extra=3
    console.log(greatestCandies(candies,extra))
}
main()
*/

/*
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
*/

/*
function smallerNumberThanCurrent(nums){
    let arr=[]
    for(let i=0;i<nums.length;i++){
        let count=0
        for(let j=0;j<nums.length;j++){
            if(nums[j]<nums[i]){
                count++
            }
        }arr.push(count)
    }return arr

}
function main(){
    let nums=[8,1,2,2,3]
    console.log(smallerNumberThanCurrent(nums))
}
main()
*/
/*
function numberofGoodPairs(nums){
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
    let nums = [1,2,3,1,1,3]
    console.log(numberofGoodPairs(nums))
}
main()
*/

/*function sumOfValues(n){
    let sum=0
    for(let i=1;i<=n;i++){
        sum+=i*n
    }return sum
}
function main(){
    let n=10
    console.log(sumOfValues(n))
}
main()
*/

function maximumNumberInSubArray(arr,k){
    if(arr.length===0)return []
    let jrr=[]
    let de=[]
    for(let i=0;i<arr.length;i++){
        while(de.length && de[0]<i-k+1){
            de.shift()
        }
        while(de.length && arr[i]>arr[de[de.length-1]]){
            de.pop()
        }
        de.push(i)
        if(i>=k-1){
            jrr.push(arr[de[0]])
        }
    }
    return jrr

}
function main(){
    let arr=[2,4,7,1,6,3]
    let k=3
    console.log(maximumNumberInSubArray(arr,k))
}
main()