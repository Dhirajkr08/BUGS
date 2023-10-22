function swap(a,b){
    let swap=a
    a=b
    b=swap
    console.log(a)
    console.log(b)
}
function main(){
    let a=parseInt(prompt())
    let b=parseInt(prompt())
    swap(a,b)
}
main()