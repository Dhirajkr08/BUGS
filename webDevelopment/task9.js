function reverseString(a){
    return a.split('').reverse().join('')
}
function main(){
    let a=prompt()
    console.log(reverseString(a))

}
main()