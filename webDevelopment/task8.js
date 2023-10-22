function personalDetails(name,age,address){
    console.log("personal details= My name is ",name, "age  is" ,age, "address is",address)

}
function main(){
    let name=prompt()
    let age=parseInt(prompt())
    let address=prompt()
    personalDetails(name,age,address)
}
main()