function findFibonacci(n){
    let n1=0
    let n2=1
    while(n1<=n){
        if(n2===n){
            return true
        }
        let n3=n1+n2
        n1=n2
        n2=n3
    }return false
}
function main(){
    let n=13
    console.log(findFibonacci(n))
}
main()