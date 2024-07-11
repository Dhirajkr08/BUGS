function printPattern(n) {

    if(n<=1 && n>=15){
        return false
    }
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+=' '
        }
        for(let k=0;k<n;k++){
            str+='*'
        }
        console.log(str)
    }
}
let n=4
printPattern(n)
