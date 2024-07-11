function farthestSmallestEle(arr){
    let size=arr.length
    let result=new Array(size).fill(-1)
    for(let i=0;i<size;i++){
        for(let j=i+1;j<size;j++){
            if(arr[j]<arr[i]){
                result[i]=j
            }
        }
    }
    return result
}
let arr=[3,1,5,2,4]
console.log(farthestSmallestEle(arr))