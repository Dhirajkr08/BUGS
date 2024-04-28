function DivideInteger(dividend,divisior){
    let divide=parseInt(dividend/divisior)
    if(divide>2147483647){
        return 2147483647
    }else if(divide<-2147483648){
        return -2147483648
    }else{
        return divide
    }
}
function main(){
    let dividend=-6
    let divisior=3
    console.log(DivideInteger(dividend,divisior))
}
main()