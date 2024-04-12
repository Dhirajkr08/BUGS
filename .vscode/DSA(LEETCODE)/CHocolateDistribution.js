function chocolateDistribution(arr,m){
    arr.sort((a,b)=>a-b)
    let count=Infinity
    for(let i=0;i<arr.length-m;i++){
        let result=arr[i+m-1]-arr[i]
        if(result<count){
            count=result
        }
    }
    return count
} 
function main(){
    let arr=[7, 3, 2, 4, 9, 12, 56]
    let m=3
    console.log(chocolateDistribution(arr,m))
}
main()