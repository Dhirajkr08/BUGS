function secondMax(arr){
    let maxi=-Infinity;
    let secMaxi=-Infinity;
    for (let i=0;i<=arr.length;i++){
        if (arr[i]>maxi){
            secMaxi=maxi
            maxi=arr[i]
        }
    }
    return secMaxi
}
function main(){
    let n=parseInt(prompt())
    let arr=[]
    for (let i=0;i<=n;i++){
        arr.push(parseInt(prompt()))
    }
    console.log(secondMax(arr))
}
main()