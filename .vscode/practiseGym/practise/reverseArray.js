function reverseArray(arr){
    let left=0
    let right=arr.length-1
    while(left<=right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
    return arr

}
let arr=[17,32,9,5,21,14]
console.log(reverseArray(arr))