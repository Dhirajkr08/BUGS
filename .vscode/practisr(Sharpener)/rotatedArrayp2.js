// function rotatedArray(nums,k){
//     k=k%nums.length
//     let temp=new Array(nums.length).fill(0)
//     for(let i=0;i<nums.length;i++){
//         temp[(i+k)%nums.length]=nums[i]
//     }
//     for(let i=0;i<nums.length;i++){
//         nums[i]=temp[i]
//     }
//     return nums
// }
// let nums=[1,2,3,4,5,6,7]
// let k=3
// console.log(rotatedArray(nums,k))


//2nd method
// function rotatedArray(nums,k){
//     k=k%nums.length
//     return nums.splice(0,nums.length,...nums.slice(-k),...nums.slice(0,-k))
    
// }
// let nums=[1,2,3,4,5,6,7]
// let k=3
// console.log(rotatedArray(nums,k))


//alt bits
// function altBits(n){
//     n=n.toString(2)
//     for(let i=0;i<n.length;i++){
//         if(n[i]===n[i+1]){
//             return false
//         }
//     }
//     return true
// }
// function main(){
//     let n=5
//     console.log(altBits(n))
// }
// main()

// function hexA(num){
//     if(num===0) return '0'
//     if(num<0) num=0xffffffff+num+1
//     let hex=num.toString(16)
//     return hex
// }
// let num=26
// console.log(hexA(num))

// function sortBitArray(arr){
//     arr.sort((a,b)=>{
//         let A=a.toString(2).split('').filter((sh)=>sh==='1').length;
//         let B=b.toString(2).split('').filter((sh)=>sh==='1').length;
//         return A-B || a-b 
//     })
//     return arr
// }
// let arr=[0,1,2,3,4,5,6,7,8]
// console.log(sortBitArray(arr))


// function divideTwoInt(dividend,divisor){
//     let divide=parseInt(dividend/divisor)
//     if(divide>2147483647){
//         return 2147483647

//     }
//     else if(divide<-2147483648){
//         return -2147483648
//     }
//     else{
//         return divide
//     }
// }
// let dividend=7
// let divisor=-3
// console.log(divideTwoInt(dividend,divisor))

// function maxWordInSentences(sentences){
//     let max=0
//     for(let i=0;i<sentences.length;i++){
//         let count=sentences[i].split(' ')
//         if(count.length>max){
//             max=count.length
//         }
//     }
//     return max
// }
// function main(){
//     let sentences=["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
//     console.log(maxWordInSentences(sentences))
// }
// main()

// function subArray(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//             let str=''
//             for(let k=i;k<j+1;k++){
//                 str+=arr[k]
//             }
//             console.log(str)
//         }
//     }
// }
// function main(){
//     let arr=[1,2,3,4,5]
//     subArray(arr)
// }
// main()


// function maxSubArray(arr){
//     let maxi=arr[0]
//     for(let i=0;i<arr.length;i++){
//         let count=0
//         for(let j=i;j<arr.length;j++){
//             count+=arr[j]

//         }
//         if(count>maxi){
//             maxi=count
//         }
//     }
//     return maxi
// }
// let arr=[5,2,-4,-5, 3,-1,2,3,1]
// console.log(maxSubArray(arr))

// function runningSum(nums){
//     let arr=[]
//     let sum=0
//     for(let i=0;i<nums.length;i++){
//         sum+=nums[i]
//         arr.push(sum)
//     }
//     return arr
// }
// let nums=[1,2,3,4]
// console.log(runningSum(nums))

// function maximumWealth(accounts){
//     let maxi=0
//     for(let i=0;i<accounts.length;i++){
//         let total=accounts[i].reduce((a,b)=>a+b,0)
//         if(total>maxi){
//             maxi=total
//         }
//     }
//     return maxi
// }
// let accounts=[[1,2,3],[3,2,1]]
// console.log(maximumWealth(accounts))

// function sumAlloddSubarray(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         let total=0
//         for(let j=i;j<arr.length;j++){
//             total+=arr[j]
//             if((j-i)%2===0){
//                 sum+=total
//             }
//         }
//     }
//     return sum
// }
// let arr=[1,4,2,5,3]
// console.log(sumAlloddSubarray(arr))


// function rotatedArray(nums,k){
//     k%=nums.length
//     let temp=new Array(nums.length).fill(0)
//     for(let i=0;i<nums.length;i++){
//         temp[(i+k)%nums.length]=nums[i]
//     }
//     for(let i=0;i<nums.length;i++){
//         nums[i]=temp[i]
//     }
//     return nums
    
// }
// let nums=[1,2,3,4,5,6,7]
// let k=3
// console.log(rotatedArray(nums,k))

// function rotatedArray(nums,k){
//     k%=nums.length
//     let ans=nums.splice(0,nums.length,...nums.slice(-k), ...nums.slice(0,-k))
//     return ans
// }
// let nums=[1,2,3,4,5,6,7]
// let k=3
// console.log(rotatedArray(nums,k))

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i;j++){
//             if(arr[j]<arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp   
//             }
//         }
//     }
//     return arr
// }
// let arr=[1,4,2,5,3]
// console.log(bubbleSort(arr))

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp=i
//         for(let j=i;j<arr.length;j++){
//             if(arr[temp]<arr[j]){
//                 temp=j
//             }
//         }
//         let temp1=arr[i]
//         arr[i]=arr[temp]
//         arr[temp]=temp1
//     }
//     return arr


// }
// function main(){
//     let arr=[1,4,2,5,3]
//     console.log(selectionSort(arr))
// }
// main()

// function InsertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp=arr[i]
//         let j=i-1
//         while(j>=0 && temp<arr[j]){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=temp
//     }
//     return arr
// }
// function main(){
//     let arr=[4,3,2,5,1]
//     console.log(InsertionSort(arr))
// }
// main()

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp=i
//         for(let j=i;j<arr.length;j++){
//             if(arr[temp]>arr[j]){
//                 temp=j
//             }
//         }
//         let d=arr[i]
//         arr[i]=arr[temp]
//         arr[temp]=d
//     }
//     return arr
// }
// let arr=[4,2,3,1,5]
// console.log(selectionSort(arr))

// function InsertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp=arr[i]
//         let j=i-1
//         while(j>=0 && temp<arr[j]){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=temp

//     }
//     return arr
// }
// let arr=[4,3,2,5,1]
// console.log(InsertionSort(arr))

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let temp=i
        for(let j=i;j<arr.length;j++){
            if(arr[temp]>arr[j]){
                temp=j
            }
        }
        let d=arr[i]
        arr[i]=arr[temp]
        arr[temp]=d
    }
    return arr
}
let arr=[4,3,1,5,2]
console.log(selectionSort(arr))
