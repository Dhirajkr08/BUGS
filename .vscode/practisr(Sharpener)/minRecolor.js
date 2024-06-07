function minRecolor(s,k){
    if(k>s.length){
        return 0
    }
    let min=Infinity
    for(let i=0;i<s.length-k;i++){
        let count=0
        for(let j=0;j<i+k;j++){
            if(s[j]==='W'){
                count++
            }
        }
        min=Math.min(count,min)
    }
    return min

}
let s='BWBBW'
let k=3
console.log(minRecolor(s,k))
