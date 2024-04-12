function addIntInArray(num,k){
    let arr=[]
    let n=num.length;
    while(n>0 || k!==0){
        if(n>0){
            n--
            k+=num[n]
        }
        arr.push(k%10)
        k=Math.floor(k/10)
    }
    return arr.reverse()
}
function main(){
    let num=[1,2,0,0]
    let k=34
    console.log(addIntInArray(num,k))
}
main()