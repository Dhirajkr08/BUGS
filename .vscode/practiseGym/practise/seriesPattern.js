function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        let star=''
        for(let k=0;k<n-i-1;k++){
            str+=' '
        }
        for(let j=0;j<n;j++){
            star+='*'
        }
        console.log(str+star)
    }
}
let n=4
printPattern(n)