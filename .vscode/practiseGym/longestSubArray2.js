function longestSubaArray(array){
    let left=0
    let right=new Array(10).fill(-1)
    let maxi=0
    for(let i=0;i<array.length;i++){
        let j=array[i]
        if(right[j]>=left){
            left=right[j]+1
        }
        right[j]=i
        maxi=Math.max(maxi,i-left+1)
    }
    return maxi

}
let arr=[1,2,3,1,2,3,4,5]
console.log(longestSubaArray(arr))