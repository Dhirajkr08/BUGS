function tempConversion(n,conversionUnit){
    if(conversionUnit==='K'){
        const kelvin=n+273
        return kelvin
    }
    else if(conversionUnit==='C'){
        const celsius=n-273
        return celsius
    }
    else{
        console.log('Invalid')
    }
}
let n=35
let conversionUnit='K'
console.log(tempConversion(n,conversionUnit))