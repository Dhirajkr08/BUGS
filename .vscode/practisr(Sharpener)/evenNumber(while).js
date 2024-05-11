function printLoop(n){
    i=1
    while(i<n){
        if(i%2===0){
            console.log(i)
        }
        i++
    }
}
function  main(){
    let n=10
    printLoop(n)
}
main()