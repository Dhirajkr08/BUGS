function findDuplicates(arr){
    arr.sort((a,b)=>a-b)
    let jrr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            jrr.push(arr[i])
        }
    }
    return jrr
}
let arr=[4,3,2,7,8,2,3,1]
console.log(findDuplicates(arr))
