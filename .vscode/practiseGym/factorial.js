function factorialOfn(n){
    let result=1
    for(let i=1;i<=n;i++){
        result*=i

    }
    return result
}
let n1=5
console.log(factorialOfn(n1))