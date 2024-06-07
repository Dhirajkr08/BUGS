function leaderNum(arr){
    let jrr=[]
    let max=arr[arr.length-1]
    for(let i=arr.length-2;i>=0;i--){
        if(arr[i]>max){
            
            jrr.unshift(arr[i])
            max=arr[i]
        }
    }
    jrr.push(max)
    return max

}
let arr=[16,17,4,3,5,2]
console.log(leaderNum(arr))
