function multiTables(N){
    for(let i=2;i<=4;i++){
        let res=''
        for(let j=1;j<=N;j++){
            res=res+(i*j)+' '
        }
        console.log(res)
        
    }
}
let N=10
multiTables(N)