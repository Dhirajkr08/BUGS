function printEven(n){
    for(let i=1;i<n+1;i++){
        if(i%4===0){
            continue
        }
        if(i%2===0){
            console.log(i)
        }
    }
}
printEven(10)