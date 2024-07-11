function PrintPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+='*'
        }
        for(let k=0;k<2*i;k++){
            str+=' '
        }
        for(let l=0;l<n-i;l++){
            str+='*'
        }
        console.log(str)
    }
}
let n=5
PrintPattern(n)
