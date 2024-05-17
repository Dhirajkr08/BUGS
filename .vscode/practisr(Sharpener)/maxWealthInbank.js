function maxWealth(accounts){
    let maxi=0
    for(let i=0;i<accounts.length;i++){
        let sum=accounts[i].reduce((a,b)=>a+b,0)
        maxi=Math.max(maxi,sum)
    }
    return maxi
}
let axxoutns=[[1,5],[7,3],[3,5]]
console.log(maxWealth(axxoutns))