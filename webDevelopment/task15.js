function convertTemp(tempValue,convUnit){
    if(convUnit==="C"){
        const kelvin=tempValue-273;
        return kelvin

    }
    else if(convUnit==='K'){
        const celsius=tempValue+273;
        return celsius
    }
    else{
        return "Invalid"
    }

}
function main(){
    let t=parseInt(prompt())
    let u=prompt()
    console.log(convertTemp(t,u))
}
main()