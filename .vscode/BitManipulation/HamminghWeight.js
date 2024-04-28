function HaminghWeight(n){
    let num=n.toString(2)
    let count=0
    for(let i=0;i<num.length;i++){
        if(num[i]==='1'){
            count++
        }
    }return count
}
function main(){
    let n=128
    console.log(HaminghWeight(n))
}
main()