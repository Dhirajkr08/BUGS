function BulidArray(arr){
    let list=[]
    for(let i=0;i<arr.length;i++){
        list.push(arr[arr[i]])
    }
    return list
}
function main(){
    let arr=[0,2,1,5,3,4]
    console.log(BulidArray(arr))
}
main()