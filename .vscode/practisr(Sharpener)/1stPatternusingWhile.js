function printPattern(n){
    let i=1
    while(i<=n){
        let j=n
        let str=''
        while(j>=i){
            str+='*'
            j--
        }
        i++
        console.log(str)
    }
}
printPattern(5)