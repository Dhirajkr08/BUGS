function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+=' '
        }
        for(let k=n;k<n*2;k++){
            str+='*'
        }
        console.log(str)
    }
}
let n=4
printPattern(n)