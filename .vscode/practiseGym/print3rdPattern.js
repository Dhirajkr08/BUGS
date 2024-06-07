function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<i;j++){
            str+=' '
        }
        for(let k=i;k<n;k++){
            str+='*'
        }
        console.log(str)
    }
}
let m=4
printPattern(m)