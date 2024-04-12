function HEXA(num){
    if(num===0) return '0'
    if(num<0) num=0xFFFFFFFF+num+1
    let ans=num.toString(16)
    return ans
}
function main(){
    n=-1
    console.log(HEXA(n))
}
main()