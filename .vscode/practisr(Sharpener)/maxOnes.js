function maxOnes(arr){
    let count=0
    let total=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            count++
            total=Math.max(count,total)
        }
        else{
            count=0
        }
    }
    return total
}
let arr=[1,1,0,1,1,1]
console.log(maxOnes(arr))
