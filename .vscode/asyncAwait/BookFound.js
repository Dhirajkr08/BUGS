function BookSearch(){
    return new Promise((resolve,reject)=>{
        let book=Math.random()>0.5
        if(book){
            resolve("Book found")
        }
        else{
            reject("Book not found")
        }
    })
}
BookSearch()
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})