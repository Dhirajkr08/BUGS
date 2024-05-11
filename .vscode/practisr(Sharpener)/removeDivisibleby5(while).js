//here the question ask cumplosary print 1 to n except divisible by 5 using while loop
function printNumber(n){
    let i=1;
    while (i<=n){
        if(i%5===0){
            i++
            continue
        }else{
            console.log(i)
            i++
        }
    }
}
function main(){
    let n=7
    printNumber(n)
}
main()