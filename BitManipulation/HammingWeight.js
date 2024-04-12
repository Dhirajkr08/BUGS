// function HammingWeight(n){
//     let count=0
//     while(n){
//         count++
//         n=n&(n-1)
//     }
//     return count
// }
// function main(){
//     let n=1011
//     console.log(HammingWeight(n))
// }
// main()

/*function HammingWeight(n){
    let count=0
    let binary=n.toString(2)
    for(let i=0;i<binary.length;i++){
        if(binary[i]==='1'){
            count++
        }
    }
    return count
}
function main(){
    let n=11
    console.log(HammingWeight(n))
}
main()*/

//binary to hamminghWeight
function hamminghWeight(n){
    let count=0
    for(let i=0;i<n.length;i++){
        if(n[i]==='1'){
            count++
        }
    }
    return count
}
function main(){
    let n='1011'
    console.log(hamminghWeight(n))
}
main()