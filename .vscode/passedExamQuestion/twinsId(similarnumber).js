function twins(arr){
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            return true
        }
    }
    return false
}
let arr=[1,2,3,1]
console.log(twins(arr))
