// FIND PALINDROME OR NOT

/*function CheckPalindrome(word){
    for(let i=0;i<word.length/2;i++){
        if(word[i]!==word[word.length-1-i]){
            return false
        }
    }
    return true
}
let word='dadad'
console.log(CheckPalindrome(word))*/

//SOrtArray Closer to 5

/*function sortArrayClosestTo5(arr){
    arr.sort((a,b)=>{
        let sortA=Math.abs(a-5)
        let sortB=Math.abs(b-5)
        if(sortA===sortB){
            return a-b
        }
        else{
            return sortA-sortB
        }
    })
    return arr
}
let arr=[1,3,5,7,9]
console.log(sortArrayClosestTo5(arr))*/

//2D ARRAY addition

/*function addTwoDArray(arr1,arr2){
    let row=arr1.length
    let column=arr1[0].length
    let ans=[]
    for(let i=0;i<row;i++){
        ans[i]=[]
        for(let j=0;j<column;j++){
            ans[i][j]=arr1[i][j]+arr2[i][j]
        }
    }
    return ans
    

}
let arr1=[[1,2,5],[3,5,5]]
let arr2=[[1,5,7],[2,1,3]]
console.log(addTwoDArray(arr1,arr2))*/



//Sort Array By Mininmum Swap



/*function sortResult(nums){
    let count=0
    for(let i=1;i<nums.length;i++){
        let minimum=i
        for(let j=i;j<nums.length;j++){
            if(nums[j]<nums[minimum]){
                minimum=j
            }
        }
        if(minimum !==i){
            let temp=nums[i]
            nums[i]=nums[minimum]
            nums[minimum]=temp
            count++
        }
    }
    return count
}
let nums=[2,8,5,4]
console.log(sortResult(nums))*/


//PrintPattern

/*function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+='*'
        }
        for(let k=1;k<2*i+1;k++){
            str+=' '
        }
        for(let l=0;l<n-i;l++){
            str+='*'
        }
        console.log(str)
    }
}
let n=5
printPattern(n)*/

//count 5's in 2d Array
// function most5In2DArray(arr){
//     let count=0
//     for(let i of arr){
//         for(let j of i){
//             if(j===5){
//                 count++
//             }
//         }
//     }
//     return count
// }
// let arr=[[1,2,5],[3,5,5]]
// console.log(most5In2DArray(arr))

//2nd method
// function countFiveInArray(arr){
//     let count=0
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             if(arr[i][j]===5){
//                 count++
//             }
//         }
//     }
//     return count
// }
// let arr=[[1,2,5],[3,5,5]]
// console.log(countFiveInArray(arr))

// function most52dArray(arr){
//     let count=0
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             if(arr[i][j]===5){
//                 count++
//             }
//         }
//     }
//     return count
// }

// let arr=[[1,2,5],[3,5,5]]
// console.log(most52dArray(arr)) 

// function twoDMatrix(arr1,arr2){
//     let row=arr1.length
//     let column=arr1[0].length
//     let sum=[]
//     for(let i=0;i<row;i++){
//         sum[i]=[]
//         for(let j=0;j<column;j++){
//             sum[i][j]=arr1[i][j]+arr2[i][j]

//         }
//     }
//     return sum

// }
// let arr1=[[1,2,3],[3,5,5]]
// let arr2=[[1,5,7],[2,1,3]]
// console.log(twoDMatrix(arr1,arr2))

//sum of Digit

/*function sum(n){
    return n.toString().split('').reduce((a,b)=>a+parseInt(b),0)
}
function badNumber(n){
    let arr=[]
    let count=10
    while(arr.length<n){
        let total=sum(count)
        if(count%total===0){
            arr.push(count)
        }
        count++
    }
    return arr
}
let n=5
console.log(badNumber(n))*/

//authentic password
/*function authenticPassword(word){
    if(word===word.toUpperCase()){
        return true
    }
    else if(word===word.toLowerCase()){
        return true
    }
    else if(word[0]===word[0].toUpperCase() && word.slice(1)===word.slice(1).toLowerCase()){
        return true
    }
    else{
        return false
    }
}
let word='flag'
console.log(authenticPassword(word))*/

function averageAge(obj){
    let count=0
    let sum=0
    for(let i in obj){
        sum+=obj[i]
        count++
    }
    let average=sum/count
    return average
}
let obj={
    'Yash':26,
    'vaibhav':24,
    'rajesh':25
}
console.log(averageAge(obj))