function sumOfMultiples(N,X){
    let sum=0
    for(let i=0;i<N;i++){
        if(i%X===0){
            sum+=i
        }
    }
    return sum
}
let N=10,X=3
console.log(sumOfMultiples(N,X))