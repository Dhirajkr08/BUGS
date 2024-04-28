function AlternatingBits(n){
    let num=n.toString(2)
    for(let i=0;i<num.length;i++){
        if(num[i]===num[i+1]){
            return false
        }
    }return true
}
function main(){
    let n=5
    console.log(AlternatingBits(n))

}
main()