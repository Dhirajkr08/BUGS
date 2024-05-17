function hamminghWeigth(n){
    let count=0
    n=n.toString(2)
    for(let i=0;i<n.length;i++){
        if(n[i]==='1'){
            count++
        }
    }
    return count
}
let n=1011
console.log(hamminghWeigth(n))