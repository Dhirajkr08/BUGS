function altBits(n){
    let binary=n.toString(2)
    for(let i=0;i<binary.length;i++){
        if(binary[i]===binary[i+1]){
            return false
        }
    }
    return true
}
function main(){
    let n=7
    console.log(altBits(n))
}
main()