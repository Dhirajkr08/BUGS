const bookSearch=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let book=Math.random()>0.5
            if(book){
                
                resolve('Book found')
            }
            else{
                reject('there is no book')
            }
        },3000)
    })
}
bookSearch()
.then((res)=>console.log(res))
.catch((err)=>console.error(err))