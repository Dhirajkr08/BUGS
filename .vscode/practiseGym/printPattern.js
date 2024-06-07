function printPattern(n){
    for(let i=1;i<=n;i++){
        let str=''
        for(let j=1;j<i*2;j++){
            str+=i
        }
        console.log(str)
    }
}
let n=5
printPattern(n)