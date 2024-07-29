function findMax(n){
    let maxi=n[0]
    for(let i=0;i<n.length;i++){
        if(n[i]>maxi){
            maxi=n[i]
        }
    }
    return maxi
}
let n=[12,7,31,18,25]
console.log(findMax(n))