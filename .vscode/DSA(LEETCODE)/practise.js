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