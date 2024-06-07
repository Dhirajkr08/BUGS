function bothArray(arr,jrr){
    if(arr.length!==jrr.length){
        return false
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==jrr[i]){
            return false
        }
    }
    return true
}
let arr=[3,7,2,8,6]
let jrr=[3,7,2,8,6]
console.log(bothArray(arr,jrr))