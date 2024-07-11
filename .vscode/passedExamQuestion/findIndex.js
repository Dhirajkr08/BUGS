function Index(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
let arr=[9,5,3,2,1]
let target=2
console.log(Index(arr,target))