function reverseArray(arr,length){
    let l=0
    let h=length-1
    while(l<h){
        let temp=arr[l]
        arr[l]=arr[h]
        arr[h]=temp
        l++
        h--
    }
    return arr
    
}
let l=[17,32,9,5,21,14]
let n=6
console.log(reverseArray(l,n))