function miniInArray(arr){
    let mini=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<mini){
            mini=arr[i]
        }
    }return mini
}
let arr=[5,6,2,9,-2]
console.log(miniInArray(arr))

//2nd method
function miniInArray(arr){
    let mini=Math.min(...arr)
    return mini
}
let jrr=[5,6,2,9,-2]
console.log(miniInArray(jrr))