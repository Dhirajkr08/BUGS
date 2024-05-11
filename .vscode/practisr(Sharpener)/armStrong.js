function armStrong(n){
    let temp=String(n)
    let sum=0
    for(let i=0;i<temp.length;i++){
        let ans=parseInt(temp[i])
        sum+=Math.pow(ans,3)
    }
    if(sum===n){
        return true
    }else{
        return false
    }
}
function main(){
    let n=153
    console.log(armStrong(n))
}
main()

//2nd method
function armStrong(n){
    let temp=n
    let sum=0
    while(temp>0){
        let ans=temp%10
        sum+=ans**3
        temp=parseInt(temp/10)
    }
    if(sum===n){
        return true
    }
    else{
        return false
    }
}
function main(){
    let n=153
    console.log(armStrong(n))
}
main()
