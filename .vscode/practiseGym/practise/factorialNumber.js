function factorialNumber(n){
    let ans=1
    for(let i=1;i<=n;i++){
        ans*=i
    }
    return ans
}
let n=8
console.log(factorialNumber(n))