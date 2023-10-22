function revString(n){
    return n.split('').reverse().join('')
}    
function main(){
    let n=prompt() ;
    print(revString(n)) ;
}
main();