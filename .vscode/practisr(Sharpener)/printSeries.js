function printSeries(n){
    for(let i=1;i<n;i++){
        if(i*i*i>n){
            break
        }
        console.log(i*i*i)
    }
}
function main(){
    let n=125
    printSeries(n)

}
main()