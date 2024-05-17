function binaryAltBit(n){
    n=n.toString(2)
    for(let i =0;i<n.length;i++){
        if(n[i]===n[i+1]){
            return false
        }
    }
    return true
}
let n=5
console.log(binaryAltBit(n))
