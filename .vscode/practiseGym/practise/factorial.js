function findFactorial(n){
    let factorial=1
    for(let i=1;i<=n;i++){
        factorial*=i
    }
    return factorial
}
let n=5
console.log(findFactorial(n))