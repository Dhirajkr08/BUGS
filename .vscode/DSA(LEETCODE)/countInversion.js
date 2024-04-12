function countInversion(arr,n){
    let count=0
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                count++
            }
        }
    }
    return count
}
function main(){
    let n=5
    let arr=[2,5,1,3,4]
    console.log(countInversion(arr,n))
}
main()












