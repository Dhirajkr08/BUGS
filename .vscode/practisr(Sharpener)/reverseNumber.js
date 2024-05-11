function reverseNumber(n){
    let temp=String(n)
    let rev=0
    for(let i=temp.length-1;i>=0;i--){
        let ans=parseInt(temp[i])
        rev=rev*10+ans
    }
    return rev    
}
function main(){
    let n=123
    console.log(reverseNumber(n))
}
main()

function reverseNumber(n){
    let rev=0
    while(n>0){
        let temp=n%10
        rev=rev*10+temp
        n=parseInt(n/10)

    }
    return rev
}
function main(){
    let n=123
    console.log(reverseNumber(n))
}
main()