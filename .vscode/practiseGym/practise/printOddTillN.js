function printOdd(n){
    for(let i=1;i<=n;i++){
        if(i%2===0){
            continue
        }
        else{
            console.log(i)
        }

    }
}
let n=10
printOdd(n)