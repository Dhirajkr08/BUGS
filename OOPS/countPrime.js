function countPrime(n){
    let count=0
    let isPrime=new Array(n).fill(true);
    isPrime[0]=false
    isPrime[1]=false
    for(let i=2;i*i<n;i++){
        if(isPrime[i]){
            for(let j=i*i;j<n;j+=i){
                isPrime[j]=false
            }
        }
    }
    for(let i=2;i<n;i++){
        if(isPrime[i]){
            count++
        }
    }return count

}
function main(){
    let n=10
    console.log(countPrime(n))
}
main()