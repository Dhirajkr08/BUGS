function findIndex(arr,target,length){
    for(let i=0;i<length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}

let length=10
let arr=[7, 23 ,15 ,42, 7, 56, 89, 15, 91, 42]
let target =56
console.log(findIndex(arr,target,length))