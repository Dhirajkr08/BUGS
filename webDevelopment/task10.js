function maxElement(arr){
    let maxi=arr[0]
    for (let i=1;i<=arr.length;i++){
        if (arr[i]>maxi){
            maxi=arr[i]

        }
    }
    return maxi
}
function main(){
    let n=parseInt(prompt())
    let arr=[]
    for (let i=0;i<=n;i++){
        arr.push(parseInt(prompt()))

    }
    console.log(maxElement(arr))
}
main()