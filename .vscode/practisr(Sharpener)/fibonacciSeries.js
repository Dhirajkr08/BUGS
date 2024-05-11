//fibonacci series 
function fibonacciSeries(n){
    let n1=0
    let n2=1
    let i=0
    while (i<n){
        console.log(n1)
        let n3=n1+n2
        n1=n2
        n2=n3
        i++

    }
}
function main(){
    let n=10
    fibonacciSeries(n)
}
main()