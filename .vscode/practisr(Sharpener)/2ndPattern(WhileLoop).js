function printPattern(n){
    let i=0
    while(i<n){
        let j=0
        let str=''
        while(j<n-i){
            str+='*'
            j++

        }
        console.log(str)
        i++

    }
    let s=0
    while(s<n){
        let k=0
        let str=''
        while(k<s+1){
            str+='*'
            k++
        }
        console.log(str)
        s++
    }
}
printPattern(5)