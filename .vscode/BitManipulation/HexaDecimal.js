function Hexa(num){
    if(num===0) return '0'
    if(num<0) num=0xffffffff+num+1
    let hex=num.toString(16)
    return hex
}
function main(){
    let num=26
    console.log(Hexa(num))
}
main()