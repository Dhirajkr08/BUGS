function printTable(n){
    for(let i=2;i<=n;i++){
        let table=''
        for(let j=1;j<=10;j++){
            table+=(i*j)+' ';
        }
        console.log(table)
    }
}
let n=4
printTable(n)