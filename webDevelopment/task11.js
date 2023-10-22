function findMinin(arr){
    let mini=arr[0];
    for(let i=1;i<=arr.length;i++){
        if (arr[i]<mini){
            mini=arr[i]
        }
    }
    return mini
}
function main(){
    let n=parseInt(prompt())
    let arr=[]
    for (let i=0;i<=n;i++){
        arr.push(parseInt(prompt()))
    }
    console.log(findMinin(arr))

}
main()