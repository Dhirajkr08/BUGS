function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<i+1;j++){
            str+='*'
        }
        for(let k=1;k<n-i;k++){
            str+=' '
        }
        for(let l=0;l<i+1;l++){
            str+='*'
        }
        console.log(str)

    }
}
printPattern(5)
