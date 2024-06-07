function sumOfArray(arr,length){
    let sum=0
    for(let i=0;i<length;i++){
        sum+=arr[i]
    }
    return sum
}
let arr=[4,7,2,9,1,5]
let n=6
console.log(sumOfArray(arr,n))
