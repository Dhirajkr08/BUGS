function findmaximum(arr){
    let maxi=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxi){
            maxi=arr[i]
        }
    }
    return maxi
}
let arr=[5,4,7,2,6]
console.log(findmaximum(arr))

//2nd method
function findmaximum(arr){
    let maxi=Math.max(...arr)
    return maxi
}
let jrr=[5,4,7,2,6]
console.log(findmaximum(jrr))
