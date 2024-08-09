function findNumberOf5(account){
    let count=0
    for(let i=0;i<account.length;i++){
        for(let j=0;j<account[i].length;j++){
            if(account[i][j]===5){
                count++
            }
        }
    }
    return count
}
let arr=[[1,2,5],[3,5,5]]
console.log(findNumberOf5(arr))