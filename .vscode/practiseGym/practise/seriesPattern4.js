
function printPattern(n){
    if(n<=1 && n>=20){
        return false
    }
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i-1;j++){
            str+=' '

        }
        if(i===n-1){
            for(let k=0;k<2*n-i;k++){
                str+='*'
            }
        }
    }
}