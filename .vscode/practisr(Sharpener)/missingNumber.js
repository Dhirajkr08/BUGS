function missingNumber(arr){
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==i){
            return i
        }

    }
    return arr
}
let arr=[8,6,4,2,3,5,7,0,9]
console.log(missingNumber(arr))

