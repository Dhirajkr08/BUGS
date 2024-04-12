function Duplicate(arr){
    arr.sort()
    for(let i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1])return arr[i]
    }
    return -1

}
function main(){
    let arr=[1,6,43,4,6]
    console.log(Duplicate(arr))
}
main()