function perfectSquare(N){
    let ans=[]
    for(let i=1;i*i<=N;i++){
        ans.push(i*i)
    }
    console.log(ans)
}
let N=15
perfectSquare(N)