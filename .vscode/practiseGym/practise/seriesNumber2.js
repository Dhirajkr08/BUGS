function seriesNumber(n){
    for(let i=1;i<=n;i++){
        let ans=''
        for(let j=1;j<i*2;j++){
            ans+=i
        }
        console.log(ans)
    }
}
let n=5
seriesNumber(n)