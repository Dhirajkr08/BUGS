function printSeries(n){
    let i=1
    while(i<n){
        let ans=i*i
        if(ans<=n){
            console.log(ans)
            i++
        }
        else{
            break
        }
    }
}
function main(){
    let n=49
    printSeries(n)
}
main()