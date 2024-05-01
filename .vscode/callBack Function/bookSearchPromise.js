function bookSearchPromise(){
    return new Promise((resolve,reject)=>{
        let result=Math.random()
        if(result>=0.5){
            resolve('Book found')
        }else{
            reject('Book not found')
        }
    },3000)
}
bookSearchPromise()
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
