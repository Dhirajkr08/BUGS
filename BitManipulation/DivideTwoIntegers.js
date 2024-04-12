function DivideTwoIntegers(dividend,divisor){
    let divide=parseInt(dividend/divisor)
    if(divide>2147483647){
        return 2147483647
    }
    else if(divide<-2147483648){
        return -2147483648
    }
    return divide

}
function main(){
    let d=7
    let i=-3
    console.log(DivideTwoIntegers(d,i))

}
main()