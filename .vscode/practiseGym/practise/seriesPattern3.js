function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<i;j++){
            str+=' '
        }
        for(let k=0;k<n-i;k++){
            str+='*'
        }
        console.log(str)
    }
}
let n=5
printPattern(n)