function minRecolors(s,k){
    if(k>s.length){
        return 0
    }
    let mini=Infinity;
    for(let i=0;i<=s.length-k;i++){
        let count=0
        for(let j=i;j<i+k;j++){
            if(s[j]==='W'){
                count++
            }
        }
        mini=Math.min(mini,count)
    }
    return mini
}
let s = "BWBBW"
let k=3
console.log(minRecolors(s,k))