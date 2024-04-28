function mergeSortedArray(arr,arr1,n,m){
    let i=m-1
    let j=n-1
    let k=(m+n)-1
    while(j>=0){
        if(i>=0 & arr[i]>arr1[j]){
            arr[k]=arr[i]
            i--
        }
        else{
            arr[k]=arr1[j]
            j--
        }
        k--
    } 
    return arr
}
function main(){
    let arr=[1,2,3,0,0,0]
    let m=3
    let arr1=[2,5,6]
    let n=3
    console.log(mergeSortedArray(arr,arr1,m,n))
}
main()