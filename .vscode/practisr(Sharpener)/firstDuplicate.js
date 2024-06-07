function firstDuplicate(arr,length){
    arr.sort((a,b)=>a-b)
    for(let i =0;i<length;i++){
        if(arr[i]===arr[i+1]){
            return arr[i]
        }
    }
    return -1
    
}
let arr=[7,23,15,42,7,56,89,15,91,42]
let length=10
console.log(firstDuplicate(arr,length))