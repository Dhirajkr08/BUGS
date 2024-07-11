function printPattern(N){
    for(let i=1;i<=N;i++){
        let ans=''
        for(let j=1;j<i+1;j++){
            ans+=j
        }
        console.log(ans)
    }
}
let n=4
printPattern(n)