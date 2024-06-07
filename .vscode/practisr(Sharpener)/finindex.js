function SerachIndex(arr,length,target){
    for(let i=0;i<length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return arr
}
let length=8
let arr=[3,17,9,25,12,5,14,21]
let target=12
console.log(SerachIndex(arr,length,target))