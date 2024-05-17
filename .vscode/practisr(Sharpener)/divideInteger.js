function divideInteger(dividend,divisor){
    let divide=parseInt(dividend/divisor)
    if(divide<0){
        if(divide>2147483647){
            return 2147483647        
        }
        else if(divide<-2147483648){
            return -2147483648
        }
        
    }  
    return divide     
}
let dividend=7
let divisor=-3
console.log(divideInteger(dividend,divisor))
